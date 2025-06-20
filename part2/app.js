const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');
const loginRouter = require('./routes/login');
const dogRouter = require('./routes/dogs');
const usRoute = require('./routes/users');

app.use('/api/login', loginRouter);

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

app.use('/api/dogs', dogRouter);

// Export the app instead of listening here
module.exports = app;

