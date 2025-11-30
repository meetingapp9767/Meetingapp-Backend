const supabase = require('../config/supabase');
const bucket = process.env.STORAGE_BUCKET || 'uploads';
async function upload(file){ const filename = `${Date.now()}_${file.originalname}`; const { data,error } = await supabase.storage.from(bucket).upload(filename, file.buffer, { contentType: file.mimetype }); if(error) throw error; const { publicURL } = supabase.storage.from(bucket).getPublicUrl(filename); return { path: filename, publicURL }; }
async function getPublicUrl(path){ const { publicURL } = supabase.storage.from(bucket).getPublicUrl(path); return publicURL; }
module.exports = { upload, getPublicUrl };