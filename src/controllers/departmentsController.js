const Departments = require('../models/departmentsModel');
async function create(req,res,next){ try{ res.status(201).json(await Departments.create(req.body)) }catch(err){next(err)} }
async function index(req,res,next){ try{ res.json(await Departments.findAll()) }catch(err){next(err)} }
async function show(req,res,next){ try{ res.json(await Departments.findById(req.params.id)) }catch(err){next(err)} }
async function update(req,res,next){ try{ res.json(await Departments.update(req.params.id, req.body)) }catch(err){next(err)} }
async function remove(req,res,next){ try{ await Departments.remove(req.params.id); res.status(204).send(); }catch(err){next(err)} }
module.exports = { create, index, show, update, remove };