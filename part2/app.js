const express = require('express');
const path = require('path');
require('dotenv').config();
const session = require('express-session');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
    secret: 'hello',
    resave false,
}))

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

app.use('/api/users', usRoute);

// Export the app instead of listening here
module.exports = app;

