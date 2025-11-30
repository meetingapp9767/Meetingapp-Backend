const supabase = require('../config/supabase');
const TABLE = 'tbl_members';


async function create(payload) { const { data, error } = await supabase.from(TABLE).insert([payload]).select(); if (error) throw error; return data[0]; }
async function findAll() { const { data, error } = await supabase.from(TABLE).select('*'); if (error) throw error; return data; }
async function findById(id) { const { data, error } = await supabase.from(TABLE).select('*').eq('member_id', id).single(); if (error) throw error; return data; }
async function update(id, payload) { const { data, error } = await supabase.from(TABLE).update(payload).eq('member_id', id).select(); if (error) throw error; return data[0]; }
async function remove(id) { const { error } = await supabase.from(TABLE).delete().eq('member_id', id); if (error) throw error; return true; }


module.exports = { create, findAll, findById, update, remove };