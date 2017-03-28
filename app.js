const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const { data } = require('./dev_data');

const app = express();
app.use(bodyParser.json());

app.get('/api/all-users', (req, res) => {
  console.log('requesting users');
  res.json(data);
});

app.listen(3000, () => console.log('App listening on port 3000'));