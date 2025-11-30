const Agenda = require('../models/agendaModel');
async function create(req,res,next){ try{ res.status(201).json(await Agenda.create(req.body)) }catch(err){next(err)} }
async function index(req,res,next){ try{ res.json(await Agenda.findAll()) }catch(err){next(err)} }
async function show(req,res,next){ try{ res.json(await Agenda.findById(req.params.id)) }catch(err){next(err)} }
async function update(req,res,next){ try{ res.json(await Agenda.update(req.params.id, req.body)) }catch(err){next(err)} }
async function remove(req,res,next){ try{ await Agenda.remove(req.params.id); res.status(204).send(); }catch(err){next(err)} }
module.exports = { create, index, show, update, remove };