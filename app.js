require('dotenv').config();
const cluster = require('cluster');

if (cluster.isMaster) {
  const cpuCount = 3;

  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const fs = require('fs');
  const cors = require('cors');
  const morgan = require('morgan');
  const compression = require('compression');

  const router = require('./server');

  const app = express();
  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(compression());

  router(app);

  app.listen(3000, () => console.log('App listening on port 3000'));
}
