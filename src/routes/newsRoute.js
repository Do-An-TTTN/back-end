import express from 'express'
import { newsController } from '~/controllers/newsController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

router.use(verifyToken, checkPermission('admin'))
// --------- route về Images
router.post('/gallery', newsController.addImages)
router.get('/gallery', newsController.getAllImages)

// --------- route về News
router.get('', newsController.getAllNews)
router.post('', newsController.createNews)
router.get('/:id', newsController.getNews)
router.put('/:id', newsController.updateNews)
router.delete('/:id', newsController.deleteNews)

export const newsRoute = router
