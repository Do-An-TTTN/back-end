import express from 'express'
import { courseController } from '~/controllers/courseController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

router.post('', verifyToken, checkPermission('admin'), courseController.createCourse)

export const courseRoute = router
