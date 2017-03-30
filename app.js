const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const connectionUrl = 'mongodb://localhost/quickview';


const { DATA } = require('./dev_data');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


/*****************************************************************

        MONGOOSE DATABASE

*****************************************************************/

// ERROR HANDLER
const handleDatabaseError = (err, res) => {
  console.error('ERROR CONNECTING: ', err);
  res.status(503).send('Database Error');
};


// TRANSACTION SCHEMA
const transactionSchema = mongoose.Schema({
  id: String,
  index: Number,
  guid: String,
  amount: String,
  user_id: String,
  date: String
});

const userSchema = mongoose.Schema({
  "id": String,
  "index": Number,
  "guid": String,
  "isActive": Boolean,
  "balance": String,
  "picture": String,
  "name": {
    "first": String,
    "last": String
  },
  "company": String,
  "email": String,
  "phone": String,
  "address": String,
  "about": String,
  "registered": String,
  "full_name": String
});


/***********************/
// Add schema methods here before calling mongoose.model



/***********************/


var Transaction = mongoose.model('Transaction', transactionSchema);
var User = mongoose.model('User', userSchema);

app.get('/api/users/all', (req, res) => {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    User.find((err, users) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: users });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
});

app.get('/api/users/id/:id', (req, res) => {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;
  console.log('user by id', req.params.id, typeof req.params.id);
  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    User.findOne({ '_id': req.params.id}, (err, user) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      console.log('found: ', user);
      res.json({ data: user });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
});


/*****************************************************************

        TRANSACTIONS ROUTES

*****************************************************************/




app.get('/api/transactions/all', (req, res) => {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    Transaction.find((err, transactions) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: transactions });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
});


app.get('/api/transactions/id/:id', (req, res) => {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    Transaction.findOne({ '_id': req.params.id}, (err, transaction) => {
      if (err) {
        return handleDatabaseError(err, res);
      }

      res.json({ data: transaction });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
});



/*****************************************************************

        EMPLOYEE ROUTES
*****************************************************************/

app.get('/api/employees/all', (req, res) => {
  res.json({ data: DATA.employees });
});

app.listen(3000, () => console.log('App listening on port 3000'));