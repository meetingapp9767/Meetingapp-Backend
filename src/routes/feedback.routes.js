const expressF = require('express');
const routerF = expressF.Router();
const controllerF = require('../controllers/feedbackController');
routerF.post('/', controllerF.create);
routerF.get('/', controllerF.index);
routerF.get('/:id', controllerF.show);
routerF.delete('/:id', controllerF.remove);
module.exports = routerF;