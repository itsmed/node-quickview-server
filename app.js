const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const { DATA } = require('./dev_data');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/all-users', (req, res) => {
  res.json({ data: DATA.users });
});



app.get('/api/all-transactions', (req, res) => {
  res.json({ data: DATA.transactions });
});



app.get('/api/all-employees', (req, res) => {
  res.json({ data: DATA.employees });
});

app.listen(3000, () => console.log('App listening on port 3000'));