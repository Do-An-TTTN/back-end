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
const uploadPhoto = upload.single('image')
const uploadMultiplePhoto = upload.array('images', 10)

const resizePhoto = (name) => {
  return async (req, res, next) => {
    if (!req.file) return
    const fileName = `${name}-${Date.now()}.jpeg`
    req.file.filename = fileName
    await sharp(req.file.buffer).toFormat('jpeg').jpeg({ quality: 90 }).toFile(`public/images/${name}/${fileName}`)

    let imageUrl = ''
    if (env.NODE_ENV === 'development') {
      imageUrl = `http://localhost:4000/images/${name}/${fileName}`
    } else {
      imageUrl = `${env.DOMAIN_NAME}/images/${name}/${fileName}`
    }
    return res.json({ imageUrl })
  }
}

const resizeNewsImages = async (req, res, next) => {
  if (!req.files) return

  let images = []
  await Promise.all(
    req?.files.map(async (file, index) => {
      const fileName = `news-${Date.now()}-${index + 1}.jpeg`
      await sharp(file.buffer).resize(2000, 1333).toFormat('jpeg').jpeg({ quality: 90 }).toFile(`public/images/news/${fileName}`)

      let imageUrl = ''
      if (env.NODE_ENV === 'development') {
        imageUrl = `http://localhost:4000/images/news/${fileName}`
      } else {
        imageUrl = `${env.DOMAIN_NAME}/images/news/${fileName}`
      }
      images.push(imageUrl)
    })
  )
  return res.json({ images })
}

router.post('/course', uploadPhoto, resizePhoto('course'))
router.post('/news/single', uploadPhoto, resizePhoto('news'))
router.post('/news/multiple', uploadMultiplePhoto, resizeNewsImages)

export const uploadRoute = router
