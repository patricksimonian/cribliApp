
const defer = require('config/defer').deferConfig
module.exports = {
  "mongodb": {
    "user": process.env.DB_USER,
    "password": process.env.DB_PW,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "name": process.env.DB_NAME,
    "connectionString": defer(function () {
    	return `mongodb://` +
      `${this.mongodb.user}:` +
      `${this.mongodb.password}@` +
      `${this.mongodb.host}:${this.mongodb.port}/` +
      `${this.mongodb.name}`;
    })
  },
  "authentication": {
    "google": {
      "clientID": process.env.GL_ID,
      "clientSecret": process.env.GL_SECRET
    }
  },
  "token": {
    "secret": process.env.JWT_SECRET || "secretKey",
    "issuer": "cribli2_backend",
    "audience": {}
  },
  "logger": {
    "isOn": process.env.LOGGER_IS_ON,
    "exceptionPath": "logs/expections.log",
    "requestPath": "logs/requests.log",
    "infoPath": "logs/info.log"
  },
  "server": {
  	"port": process.env.PORT
  }
}
