

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const history = require('connect-history-api-fallback')
const apiMemoRouter = require('./routes/apimemo')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/memo/',apiMemoRouter)

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

