const expressD = require('express');
const routerD = expressD.Router();
const controllerD = require('../controllers/departmentsController');


routerD.post('/', controllerD.create);
routerD.get('/', controllerD.index);
routerD.get('/:id', controllerD.show);
routerD.put('/:id', controllerD.update);
routerD.delete('/:id', controllerD.remove);


module.exports = routerD;