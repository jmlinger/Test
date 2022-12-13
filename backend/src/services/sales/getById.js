require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (orderId) => {
  const getSalesById = await Models.sales.findByPk(orderId, {
    include: [
      { model: Models.users, as: 'seller', attributes: { exclude: ['email', 'password'] } },
      { model: Models.users, as: 'user', attributes: { exclude: ['email', 'password'] } },
      { model: Models.products, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  return { status: StatusCodes.OK, message: getSalesById };
};