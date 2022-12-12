const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const create = require('./create');
const usersList = require('./usersList');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(auth), rescue(create));
router.get('/', rescue(auth), rescue(usersList));
router.delete('/:id', rescue(auth), rescue(remove));

module.exports = router;
