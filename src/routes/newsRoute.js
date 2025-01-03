import express from 'express'
import { newsController } from '~/controllers/newsController'
import checkPermission from '~/middlewares/checkPermission'
import { verifyToken } from '~/middlewares/verifyToken'
const router = express.Router()

// --------- route về News
router.get('', newsController.getAllNews)
router.get('/:id', newsController.getNews)

router.use(verifyToken, checkPermission('admin'))
router.post('', newsController.createNews)
router.put('/:id', newsController.updateNews)
router.delete('/:id', newsController.deleteNews)
// --------- route về Images
// router.post('/gallery', newsController.addImages)
// router.get('/gallery', newsController.getAllImages)

export const newsRoute = router
