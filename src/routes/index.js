import express from 'express'
import { authRoute } from '~/routes/authRoute'
import { courseRoute } from '~/routes/courseRoute'
const router = express.Router()

router.use('/course', courseRoute)
router.use('/auth', authRoute)

export const API = router
