// src/models/admin.model.js
const supabase = require('../config/supabase');
const TABLE = 'tbl_admin';

async function findAdminByEmail(email) {
  const { data, error } = await supabase.from(TABLE).select('*').eq('email', email).single();
  if (error) {
    // If not found, supabase returns error; return null to caller instead
    if (error.code === 'PGRST116' || /Find.*no rows/.test(error.message)) return null;
    throw error;
  }
  return data;
}

async function createAdmin(payload) {
  const { data, error } = await supabase.from(TABLE).insert([payload]).select();
  if (error) throw error;
  return data[0];
}

module.exports = { findAdminByEmail, createAdmin };
