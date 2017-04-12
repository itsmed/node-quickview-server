require('dotenv').config();
const cluster = require('cluster');
const db = require('./server/db/db');

const memwatch = require('memwatch-next');

memwatch.on('leak', (info) => {
  console.log('LEAKING!');
  console.log(info);
});

memwatch.on('stats', (stats) => {
  console.log('STATS:', stats);
});



if (process.env.NODE_ENV === 'production') {
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
    const expressSession = require('express-session');
    
    const router = require('./server');

    const app = express();
    app.use(morgan('dev'));
    app.use(expressSession({
      secret: process.env.sessionSecret
    }));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(compression());

    router(app);

    const server = app.listen(3000, () => console.log('App listening on port 3000'));

    module.exports = server;
  }

} else {
  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const fs = require('fs');
  const cors = require('cors');
  const morgan = require('morgan');
  const compression = require('compression');
  const expressSession = require('express-session');

  const router = require('./server');

  const app = express();

  app.use(morgan('dev'));
  app.use(expressSession({
    secret: process.env.sessionSecret
  }));
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(compression());

  router(app);

  const server = app.listen(3000, () => console.log('App listening on port 3000'));

  module.exports = server;
}
