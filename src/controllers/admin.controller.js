const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

async function adminLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const admin = await Admin.findAdminByEmail(email);
    if (!admin) return res.status(400).json({ error: 'Invalid email or password' });

    const ok = await bcrypt.compare(password, admin.password);
    if (!ok) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ admin_id: admin.admin_id, email: admin.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, admin: { admin_id: admin.admin_id, email: admin.email, name: admin.name } });
  } catch (err) {
    next(err);
  }
}

module.exports = { adminLogin };
