require('dotenv').config();

const environment = process.env.NODE_ENV || "production";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "",
};

const options = {
  host: process.env.SQL_HOST || 'localhost',
  port: process.env.SQL_PORT || '3306',
  database: process.env.USE_HEROKU_DB 
    ? process.env.SQL_DATABASE   
    :`${process.env.SQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
  username: process.env.SQL_USER || 'root',
  password: process.env.SQL_PASSWORD || 'password',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
