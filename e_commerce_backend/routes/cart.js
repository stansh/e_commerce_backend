var express = require('express');
const app = require('../app');
var router = express.Router();
const CartItem = require('../models/cartItem'); 
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.end('stuff from server');
}); */



/* router.get('/products', (req, res, next) => {
    console.log(req);
    Product.find()
    .then(products => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
        
    })
    .catch(err => next(err));
}) */

router.post('/cart', (req, res, next) => {
  CartItem.create(req.body) 
  .then(item => {
      console.log('New cart item created ', item);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(prod);
      
  })
  .catch(err => next(err));
})
  
/* .delete('/products', (req, res, next) => {
  Product.deleteMany()// every document in the campasites collection will be deleted
  .then(response => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(response);
      
  })
  .catch(err => next(err));
});
  */
module.exports = router;


