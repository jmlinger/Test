require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (userId) => {
  const getSales = await Models.sales.findAll({ where: { userId } });

  if (getSales.length === 0) {
    const getSalesFromSeller = await Models.sales
      .findAll({ where: { sellerId: userId } });
    
    return { status: StatusCodes.OK, message: getSalesFromSeller };
  }

  return { status: StatusCodes.OK, message: getSales };
};
