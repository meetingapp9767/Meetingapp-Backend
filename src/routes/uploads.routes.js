const expressU = require('express');
const routerU = expressU.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const uploadsController = require('../controllers/uploadsController');
routerU.post('/', upload.single('file'), uploadsController.upload);
routerU.get('/public/:path', uploadsController.getPublicUrl);
module.exports = routerU;