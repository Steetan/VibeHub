import { Request, Response, Router } from 'express'
import {
	addVideo,
	getPreviews,
	getVideoById,
	getVideoBySearch,
} from './controllers/VideoController.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

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

const upload = multer({ storage: storageVideos })
const uploadImage = multer({ storage: storagePreviews })

router.post('/addvideo', upload.single('video'), addVideo)

router.get('/', getPreviews)
router.get('/video', getVideoById)
router.get('/quest', getVideoBySearch)

router.post('/prev', uploadImage.single('image'), (req, res) => {
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
