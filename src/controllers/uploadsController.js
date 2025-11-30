const Uploads = require('../models/uploadsModel');
async function upload(req,res,next){ try{ if(!req.file) return res.status(400).json({ error: 'No file' }); const result = await Uploads.upload(req.file); res.status(201).json(result); }catch(err){next(err)} }
async function getPublicUrl(req,res,next){ try{ const url = await Uploads.getPublicUrl(req.params.path); res.json({ publicURL: url }); }catch(err){next(err)} }
module.exports = { upload, getPublicUrl };