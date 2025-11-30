const Members = require('../models/membersModel');


async function create(req, res, next) {
try {
const result = await Members.create(req.body);
res.status(201).json(result);
} catch (err) { next(err); }
}
async function index(req, res, next) {
try { res.json(await Members.findAll()); } catch (err) { next(err); }
}
async function show(req, res, next) {
try { res.json(await Members.findById(req.params.id)); } catch (err) { next(err); }
}
async function update(req, res, next) {
try { res.json(await Members.update(req.params.id, req.body)); } catch (err) { next(err); }
}
async function remove(req, res, next) {
try { await Members.remove(req.params.id); res.status(204).send(); } catch (err) { next(err); }
}
module.exports = { create, index, show, update, remove };