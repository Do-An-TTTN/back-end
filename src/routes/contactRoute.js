import express from 'express'
import { contactController } from '~/controllers/contactController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

router.post('/', contactController.createContact)
router.use(verifyToken, checkPermission('admin'))
router.get('/', contactController.getAllContact)
router.delete('/:id', contactController.deleteContact)

export const contactRoute = router
