require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
// const mongoose = require('mongoose');

const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;


const router = require('./server');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

router(app);

app.listen(3000, () => console.log('App listening on port 3000'));