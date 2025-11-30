const expressAt = require('express');
const routerAt = expressAt.Router();
const controllerAt = require('../controllers/attendanceController');
routerAt.post('/', controllerAt.create);
routerAt.get('/meeting/:meetingId', controllerAt.findByMeeting);
routerAt.delete('/:id', controllerAt.remove);
module.exports = routerAt;