'use strict'

const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.send('Root');
});

module.exports = route;
