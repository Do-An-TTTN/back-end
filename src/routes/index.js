import express from 'express'
import { authRoute } from '~/routes/authRoute'
import { categoryRoute } from '~/routes/categoryRoute'
import { courseRoute } from '~/routes/courseRoute'
import { newsRoute } from '~/routes/newsRoute'
const router = express.Router()

router.use('/course', courseRoute)
router.use('/auth', authRoute)
router.use('/category', categoryRoute)
router.use('/news', newsRoute)

export const API = router
