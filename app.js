require('dotenv').config();
const cluster = require('cluster');
const db = require('./server/db/db');

const PORT = process.env.PORT || 3000;

const memwatch = require('memwatch-next');
let hd;
memwatch.on('leak', (info) => {
  console.log('LEAKING!');
  console.log(info);

  if (!hd) {
    hd = new memwatch.HeapDiff();
  } else {
    let diff = hd.end();
    console.error(util.inpsect(diff, true, null));
    hd = null;
  }
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
    
    const router = require('./server');

    const app = express();
    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(compression());

    router(app);

    const server = app.listen(PORT, () => console.log('App listening on port 3000'));

    module.exports = server;
  }

} 
else {
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
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(compression());

  router(app);

  const server = app.listen(3000, () => console.log('App listening on port 3000'));

  module.exports = server;
}
