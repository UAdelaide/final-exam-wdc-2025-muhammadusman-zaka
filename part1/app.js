var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var dogsRouter = require('../part1/routes/dogs');
var walkersRouter = require('../part1/routes/walkers');
var walkRequestsRouter = require('../part1/routes/walkrequests');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/dogs', dogsRouter);
app.use('/api/walkers', walkersRouter);

module.exports = app;
