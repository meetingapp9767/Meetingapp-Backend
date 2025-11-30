const Feedback = require('../models/feedbackModel');
async function create(req,res,next){ try{ res.status(201).json(await Feedback.create(req.body)) }catch(err){next(err)} }
async function index(req,res,next){ try{ res.json(await Feedback.findAll()) }catch(err){next(err)} }
async function show(req,res,next){ try{ res.json(await Feedback.findById(req.params.id)) }catch(err){next(err)} }
async function remove(req,res,next){ try{ await Feedback.remove(req.params.id); res.status(204).send(); }catch(err){next(err)} }
module.exports = { create, index, show, remove };