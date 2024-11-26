import express from 'express'
import { courseRoute } from '~/routes/courseRoute'
const router = express.Router()

router.use('/course', courseRoute)

export const API = router
