const supabase = require('../config/supabase');
const TABLE = 'tbl_attended_member';
async function create(payload){ const { data,error } = await supabase.from(TABLE).insert([payload]).select(); if(error) throw error; return data[0]; }
async function findByMeeting(meetingId){ const { data,error } = await supabase.from(TABLE).select('*').eq('meeting_id', meetingId); if(error) throw error; return data; }
async function remove(id){ const { error } = await supabase.from(TABLE).delete().eq('attended_id', id); if(error) throw error; return true; }
module.exports = { create, findByMeeting, remove };