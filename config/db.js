const { development, test } = require('../config').database;

module.exports = {
  "development": {
    "username": development.username,
    "password": development.password,
    "database": development.database,
    "host": development.host,
    "dialect": "mysql"
  },
  "test": {
    "username": test.username,
    "password": test.password,
    "database": test.database,
    "host": test.host,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
