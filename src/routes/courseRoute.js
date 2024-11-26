import express from 'express'
import { courseController } from '~/controllers/courseController'
const router = express.Router()

router.post('', courseController.createCourse)

export const courseRoute = router
