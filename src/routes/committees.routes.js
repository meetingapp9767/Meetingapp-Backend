const expressC = require('express');
const routerC = expressC.Router();
const controllerC = require('../controllers/committeesController');
routerC.post('/', controllerC.create);
routerC.get('/', controllerC.index);
routerC.get('/:id', controllerC.show);
routerC.put('/:id', controllerC.update);
routerC.delete('/:id', controllerC.remove);
module.exports = routerC;