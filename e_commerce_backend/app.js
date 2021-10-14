var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');


const stripe = require("stripe")("sk_test_51JhRBrECGNUUIhhjH0ft95P6jY80N538YN7d1xaAn0kkfW0aulfmEBfphaMOZxD6v7USiLeYUPmNfFSkELtVkb7L00y1SboNnB");


//const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/e_commerce';
const dbname = 'e_commerce'

/* MongoClient.connect(url, {useUnifiedTopology: true})
.then(client => {
  console.log(`connected to server.${client}`);
  const db = client.db(dbname);
})
 */

const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: "http://localhost:3000"}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/create-checkout-session', checkoutRouter);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
