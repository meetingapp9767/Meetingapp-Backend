// src/models/college.model.js
const supabase = require('../config/supabase');
const TABLE = 'tbl_college';

async function createCollege(payload) {
  const { data, error } = await supabase.from(TABLE).insert([payload]).select();
  if (error) throw error;
  return data[0];
}

async function findAllColleges() {
  const { data, error } = await supabase.from(TABLE).select('*');
  if (error) throw error;
  return data;
}

async function findCollegeById(id) {
  const { data, error } = await supabase.from(TABLE).select('*').eq('college_id', id).single();
  if (error) throw error;
  return data;
}

async function updateCollege(id, payload) {
  const { data, error } = await supabase.from(TABLE).update(payload).eq('college_id', id).select();
  if (error) throw error;
  return data[0];
}

async function deleteCollege(id) {
  const { error } = await supabase.from(TABLE).delete().eq('college_id', id);
  if (error) throw error;
  return true;
}

module.exports = {
  createCollege,
  findAllColleges,
  findCollegeById,
  updateCollege,
  deleteCollege,
};
