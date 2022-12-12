require('dotenv').config();

const { SQL_DIALECT, SQL_SSL, SQL_HOST, SQL_PORT, SQL_USER, SQL_PASSWORD, SQL_DB_NAME} = process.env;

const environment = process.env.NODE_ENV || "development";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "",
};

const options = {
  dialect: SQL_DIALECT,
  host: SQL_HOST,
  port: SQL_PORT,
  username: SQL_USER,
  password: SQL_PASSWORD,
  database: `${SQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      require: SQL_SSL,
      rejectUnauthorized: false
    }
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
