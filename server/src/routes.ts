import { Request, Response, Router } from 'express'
import {
	addVideo,
	getPreviews,
	getVideoById,
	getVideoBySearch,
	getVideoByUserId,
} from './controllers/VideoController.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { createUser, getMeInfo, loginUser } from './controllers/UserController.js'
import { registerValidator } from './middlewares/validations.js'

const router = Router()

const storageVideos = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads/videos')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})
const storagePreviews = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads/previews')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})
const storageUserIcons = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads/userIcons')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage: storageVideos })
const uploadImage = multer({ storage: storagePreviews })
const uploadUserIcons = multer({ storage: storageUserIcons })

router.post('/addvideo', upload.single('video'), addVideo)

router.get('/', getPreviews)
router.get('/video', getVideoById)
router.get('/video/user', getVideoByUserId)
router.get('/quest', getVideoBySearch)

router.get('/auth/login', loginUser)
router.post('/auth/reg', registerValidator, createUser)
router.get('/meinfo', getMeInfo)

router.post('/prev', uploadImage.single('image'), (req, res) => {
	res.status(201).json({
		url: `${req.file?.originalname}`,
	})
})

router.post('/userimage', uploadImage.single('image'), (req, res) => {
	res.status(201).json({
		url: `${req.file?.originalname}`,
	})
})

router.delete('/prev/:filename', (req, res) => {
	const fileName = req.params.filename
	const filePath = path.join('uploads/previews', fileName)

	fs.unlink(filePath, (err) => {
		if (err) {
			return res.status(500).json({ error: 'Ошибка при удалении файла' })
		}
		res.json({ message: 'Файл успешно удален' })
	})
})

export default router
