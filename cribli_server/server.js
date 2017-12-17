require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override')
//config
const config = require('config');
// logger
const morgan = require('morgan');
const winstonLogger = require('./logs/winston_logger');
const fs = require('fs');
// db
const mongoose = require('mongoose');
// middleware dependancies
const bodyParser = require('body-parser');
// update mongoose promise lib
mongoose.Promise = global.Promise;
// connection
mongoose.connect(config.get('mongodb.connectionString'), {})
.then(() => {
	console.log('\n' + '='.repeat(20));
	console.log('db connected!');
	console.log('\n' + '='.repeat(20));
});

// app connection and listent
const app = express();

app.set('port', config.get('server.port'));
// MIDDLEWARES
//method overriding
app.use(methodOverride('X-HTTP-Method-Override'));
//loggin
app.use(morgan('combined', {
	stream: winstonLogger.stream
}));
//access request body
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));

app.listen(app.get('port'), () => {
	winstonLogger.info('listening on port', app.get('port'));
});
