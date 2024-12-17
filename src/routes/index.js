import express from 'express'
import { authRoute } from '~/routes/authRoute'
import { categoryRoute } from '~/routes/categoryRoute'
import { contactRoute } from '~/routes/contactRoute'
import { courseRoute } from '~/routes/courseRoute'
import { newsRoute } from '~/routes/newsRoute'
import { uploadRoute } from '~/routes/uploadRoute'
const router = express.Router()

router.use('/course', courseRoute)
router.use('/auth', authRoute)
router.use('/category', categoryRoute)
router.use('/news', newsRoute)
router.use('/contact', contactRoute)
router.use('/upload', uploadRoute)

export const API = router
