const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/college.controller');

router.get('/', collegeController.getAllColleges);
router.post('/', collegeController.createCollege);
router.put('/:id', collegeController.updateCollege);
router.delete('/:id', collegeController.deleteCollege);

module.exports = router;
