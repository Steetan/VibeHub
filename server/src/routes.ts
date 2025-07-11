import { Request, Response, Router } from 'express'
import { getPreviews, getVideoById, getVideoBySearch } from './controllers/VideoController.js'
import multer from 'multer'

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

router.get('/', getPreviews)
router.get('/video', getVideoById)
router.get('/quest', getVideoBySearch)

router.post('/dep', upload.single('video'), (req: Request, res: Response) => {
	res.status(201).json({
		url: req.file?.originalname,
	})
})

export default router
