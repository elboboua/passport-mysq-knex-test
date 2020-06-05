// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      port: process.env.REMOTE_PORT,
      host: process.env.REMOTE_HOST,
      database: process.env.REMOTE_DATABASE,
      user: process.env.REMOTE_USERNAME,
      password: process.env.REMOTE_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
