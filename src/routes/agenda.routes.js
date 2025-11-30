const expressA = require('express');
const routerA = expressA.Router();
const controllerA = require('../controllers/agendaController');
routerA.post('/', controllerA.create);
routerA.get('/', controllerA.index);
routerA.get('/:id', controllerA.show);
routerA.put('/:id', controllerA.update);
routerA.delete('/:id', controllerA.remove);
module.exports = routerA;