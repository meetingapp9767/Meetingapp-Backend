const express = require('express');
const router = express.Router();
const controller = require('../controllers/membersController');


router.post('/', controller.create);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);


module.exports = router;