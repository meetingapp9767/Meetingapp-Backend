require('dotenv').config();
const bcrypt = require('bcrypt');
const supabase = require('../src/config/supabase'); // adjust path if needed

async function create() {
  const email = 'priyam@admin.com';
  const plain = 'Admin@123'; // change immediately
  const hash = await bcrypt.hash(plain, 10);

  const { data, error } = await supabase.from('tbl_admin').insert([{ email, password: hash, name: 'Super Admin' }]).select();
  if (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
  console.log('Admin created:', data[0]);
  process.exit(0);
}

create();
