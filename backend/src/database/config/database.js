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
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  database: `${process.env.SQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  dialect: 'mysql',
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
