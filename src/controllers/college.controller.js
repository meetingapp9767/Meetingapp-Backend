// src/controllers/college.controller.js
const College = require('../models/college.model');

async function getAllColleges(req, res, next) {
  try {
    const data = await College.findAllColleges();
    res.json(data);
  } catch (err) { next(err); }
}

async function createCollege(req, res, next) {
  try {
    const payload = req.body;
    const created = await College.createCollege(payload);
    res.status(201).json(created);
  } catch (err) { next(err); }
}

async function updateCollege(req, res, next) {
  try {
    const id = req.params.id;
    const payload = req.body;
    const updated = await College.updateCollege(id, payload);
    res.json(updated);
  } catch (err) { next(err); }
}

async function deleteCollege(req, res, next) {
  try {
    const id = req.params.id;
    await College.deleteCollege(id);
    res.json({ message: 'College deleted' });
  } catch (err) { next(err); }
}

module.exports = {
  getAllColleges,
  createCollege,
  updateCollege,
  deleteCollege,
};
