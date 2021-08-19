var express = require('express');
const app = require('../app');
var router = express.Router();
const Product = require('../models/product'); 
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.end('stuff from server');
}); */



router.get('/products', (req, res, next) => {
    console.log(req);
    Product.find()
    .then(products => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    })
    .catch(err => next(err));
})

.post('/products', (req, res, next) => {
  Product.create(req.body) 
  .then(prod => {
      console.log('Campsite Created ',prod);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(prod);
  })
  .catch(err => next(err));
})
  
.delete('/products', (req, res, next) => {
  Product.deleteMany()// every document in the campasites collection will be deleted
  .then(response => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(response);
  })
  .catch(err => next(err));
});
  /* .then(products => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(products);
  })
  .catch(err => next(err)); */



/* app.all ('/products', (req,res,next) => { 
   res.statusCode = 200;
   res.setHeader('Content-Type','text/plain');
   next();

})
app.get('/products', (req, res) => {
  res.end('Will send all the campsites to you');
});

app.post('/products', (req, res) => {
  res.statusCode = 403;
  res.end(`Operation not supported`);
});

app.put('/products', (req, res) => {
  res.statusCode = 403;
  res.end(`Operation not supported`);
});

app.delete('/products', (req, res) => {
  res.statusCode = 403;
  res.end(`Operation not supported`);
}); */
module.exports = router;


