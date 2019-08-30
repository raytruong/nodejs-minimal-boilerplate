//Load environment variables
require('dotenv').config();

//Initialize express application
const express = require('express');
const app = express();

//Link router
const router = require('./routes');
app.use('/', router);

//Run API
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API serving on port ${port}`);
});

module.exports = app;