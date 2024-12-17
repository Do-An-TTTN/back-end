import express from 'express'
import multer from 'multer'
import sharp from 'sharp'
import { env } from '~/config/environment'

import ApiError from '~/utils/ApiError'

const router = express.Router()

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb(new ApiError(400, 'Vui lòng chọn hình ảnh'), false)
  }
}

const upload = multer({ storage: multerStorage, fileFilter: multerFilter })
const uploadCoursePhoto = upload.single('image')

const resizeCoursePhoto = async (req, res, next) => {
  if (!req.file) return
  const fileName = `course-${Date.now()}.jpeg`
  req.file.filename = fileName
  await sharp(req.file.buffer).resize(400, 600).toFormat('jpeg').jpeg({ quality: 90 }).toFile(`public/images/course/${fileName}`)

  let imageUrl = ''
  if (env.BUILD_MODE === 'development') {
    imageUrl = `http://localhost:4000/images/course/${fileName}`
  } else {
    imageUrl = `/images/course/${fileName}`
  }
  return res.json({ imageUrl })
}
router.post('/course', uploadCoursePhoto, resizeCoursePhoto)

export const uploadRoute = router
