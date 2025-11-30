const supabase = require('../config/supabase');
const TABLE = 'tbl_meeting_planning';
async function create(payload){ const { data,error } = await supabase.from(TABLE).insert([payload]).select(); if(error) throw error; return data[0]; }
async function findAll(){ const { data,error } = await supabase.from(TABLE).select('*, tbl_members(member_id, member_name), tbl_agenda(*), tbl_committees(*)'); if(error) throw error; return data; }
async function findById(id){ const { data,error } = await supabase.from(TABLE).select('*').eq('id', id).single(); if(error) throw error; return data; }
async function update(id,payload){ const { data,error } = await supabase.from(TABLE).update(payload).eq('id', id).select(); if(error) throw error; return data[0]; }
async function remove(id){ const { error } = await supabase.from(TABLE).delete().eq('id', id); if(error) throw error; return true; }
module.exports = { create, findAll, findById, update, remove };