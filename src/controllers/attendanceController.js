const Attendance = require('../models/attendanceModel');
async function create(req,res,next){ try{ res.status(201).json(await Attendance.create(req.body)) }catch(err){next(err)} }
async function findByMeeting(req,res,next){ try{ res.json(await Attendance.findByMeeting(req.params.meetingId)) }catch(err){next(err)} }
async function remove(req,res,next){ try{ await Attendance.remove(req.params.id); res.status(204).send(); }catch(err){next(err)} }
module.exports = { create, findByMeeting, remove };