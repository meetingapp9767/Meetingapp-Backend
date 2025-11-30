const express = require('express');
const cors = require('cors');
require('dotenv').config();


const membersRoutes = require('./src/routes/members.routes');
const departmentsRoutes = require('./src/routes/departments.routes');
const committeesRoutes = require('./src/routes/committees.routes');
const agendaRoutes = require('./src/routes/agenda.routes');
const meetingsRoutes = require('./src/routes/meetings.routes');
const attendanceRoutes = require('./src/routes/attendance.routes');
const feedbackRoutes = require('./src/routes/feedback.routes');
const uploadsRoutes = require('./src/routes/uploads.routes');
const collegeRoutes = require('./src/routes/college.routes');
const adminRoutes = require('./src/routes/admin.routes');
const { errorHandler } = require('./src/middlewares/errorHandler');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/college', collegeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/departments', departmentsRoutes);
app.use('/api/committees', committeesRoutes);
app.use('/api/agenda', agendaRoutes);
app.use('/api/meetings', meetingsRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/uploads', uploadsRoutes);


app.get('/health', (req,res) => res.json({ status: 'ok' }));
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));