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
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false}
}));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const loginRouter = require('./routes/login');
const dogRouter = require('./routes/dogs');
const usRoute = require('./routes/users');
const logoutRouter = require('./routes/logout');
const { log } = require('console');

app.use('/api/login', loginRouter);

app.use('/api/walks', walkRoutes);

app.use('/api/dogs', dogRouter);

app.use('/api/users', usRoute);

app.use('/logout', logoutRouter);

// Export the app instead of listening here
module.exports = app;

