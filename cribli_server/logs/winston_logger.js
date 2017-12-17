const winston = require('winston');
const config = require('config');
// log level, in non dev environments to log out any debug output
const level = process.env.LOG_LEVEL || 'debug';
//path to write info logs
const infoPath = config.get('logger.infoPath');
var logger = new winston.Logger({
	transports: [
		new winston.transports.File({
			level: 'info',
			filename: infoPath,
			handleExceptions: false,
			json: true,
			maxsize: 5242880, //5MB
			maxFiles: 5,
			colorize: false
		}),
		new winston.transports.Console({
			level: level,
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

logger.stream = {
	write: function(message, encoding){
		logger.info(message);
	}
};
module.exports = logger;
