const expressM = require('express');
const routerM = expressM.Router();
const controllerM = require('../controllers/meetingsController');
routerM.post('/', controllerM.create);
routerM.get('/', controllerM.index);
routerM.get('/:id', controllerM.show);
routerM.put('/:id', controllerM.update);
routerM.delete('/:id', controllerM.remove);
module.exports = routerM;