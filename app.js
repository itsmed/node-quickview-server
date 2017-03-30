require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;


const router = require('./server');

const User = require('./server/db/user/user-model');

const { DATA } = require('./dev_data');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
router(app);

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




/***********************/
// Add schema methods here before calling mongoose.model



/***********************/


var Transaction = mongoose.model('Transaction', transactionSchema);


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
      console.log('transa', transaction);
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