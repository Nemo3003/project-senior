const Router = require('express')
const router = Router();
const {userUploads, getDocument} = require('../controllers/user.controller')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'),userUploads)
router.get('/files/:id', getDocument)

module.exports = router;