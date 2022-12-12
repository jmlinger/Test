require('dotenv').config();
const sequelize = require('sequelize');

const { SQL_DIALECT } = process.env;

function dateFormat(column, alias) {
  const obj = {
    mysql: {
      fn: 'DATE_FORMAT',
      col: '%d/%m/%Y',
    },
    postgres: {
      fn: 'to_char',
      col: 'dd/mm/yyyy',
    },
  };
  
  return {
    include: [
      [sequelize.fn(obj[SQL_DIALECT].fn,
        sequelize.col(column), obj[SQL_DIALECT].col), alias],
    ],
  };
}

module.exports = { dateFormat };
