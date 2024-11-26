import express from 'express'
import { categoryController } from '~/controllers/categoryController'
const router = express.Router()

router.get('/', categoryController.getAllCate)
router.get('/:id', categoryController.getCate)
router.post('/', categoryController.createCate)
router.delete('/:id', categoryController.deleteCate)

export const categoryRoute = router
