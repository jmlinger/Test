require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { dateFormat } = require('../../utils/dateFormat');

const attributes = dateFormat('sale_date', 'saleDate');

module.exports = async (userId) => {
  const getSales = await Models.sales.findAll({ where: { userId }, attributes });

  if (getSales.length === 0) {
    const getSalesFromSeller = await Models.sales
      .findAll({ where: { sellerId: userId }, attributes });
    
    return { status: StatusCodes.OK, message: getSalesFromSeller };
  }

  return { status: StatusCodes.OK, message: getSales };
};
