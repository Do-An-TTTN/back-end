import express from 'express'
import { categoryController } from '~/controllers/categoryController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

router.use(verifyToken, checkPermission('admin'))
router.get('/', categoryController.getAllCate)
router.get('/:id', categoryController.getCate)
router.post('/', categoryController.createCate)
router.delete('/:id', categoryController.deleteCate)

export const categoryRoute = router
