//Configure express router
const express = require('express');
const router = express.Router();

//Enable body parsing
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Import API
const api = require('./api');

//Routes
router.get('/get', api.getUser); //Example route, returns a user's information
router.get('/set', api.setUser); //Example route, edits a user's information

module.exports = router;
