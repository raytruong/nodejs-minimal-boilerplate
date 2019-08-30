// API controller index.js
const user_get = require('./user/get');
const user_set = require('./user/set');

const api = {
  ...user_get,
  ...user_set
};

module.exports = api;
