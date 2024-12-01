import express from 'express'
import { courseController } from '~/controllers/courseController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

router.get('', courseController.getAllCourse)
router.get('/:id', courseController.getCourse)

router.use(verifyToken, checkPermission('admin'))
router.post('', courseController.createCourse)
router.post('', courseController.createCourse)
router.delete('/:id', courseController.deleteCourse)
router.put('/:id', courseController.updateCourse)

export const courseRoute = router
