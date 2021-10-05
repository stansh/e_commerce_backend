var express = require('express');
const app = require('../app');
var router = express.Router();
const CartItem = require('../models/cartItem'); 
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.end('stuff from server');
}); */



router.get('/', (req, res, next) => {
  CartItem.find()
  .then(products => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(products);
      
  })
  .catch(err => next(err));
})


router.post('/', (req, res, next) => {
  console.log(req.body)
  CartItem.findById(req.body)
  .then(item => {
    if(item) {
      item.qty++
      item.save()
     .then(item => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(item);
      })
     .catch(err => next(err));
    } else {
      CartItem.create(req.body)
      .then(item => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
        })
        .catch(err => next(err));
        /* err = new Error(`Campsite ${req.params.campsiteId} not found`);
        err.status = 404;
        return next(err); */
      }
  })
  .catch(err => next(err));
})


router.put('/', (req, res, next) => {
  console.log(req.body)
  let operation = req.body.operation;
  CartItem.findById(req.body._id)
  .then(item => {
    if(item && operation === 'up') {
      item.qty++
      item.save()
     .then(item => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(item);
      })
     .catch(err => next(err));
    } else if (item && operation === 'down') {
        if (item.qty > 1) {
          item.qty--
          item.save()
          .then(item => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(item);
            })
          .catch(err => next(err));
        } else {
          item.delete()
          .then(item => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(item);
            })
          .catch(err => next(err));
        }
        
        
     } else {
      err = new Error();
      err.status = 404;
      return next(err);
    }

  })
  .catch(err => next(err));
})

router.delete('/', (req, res, next) => {
  console.log(req.body)
  CartItem.findById(req.body._id)
  .then(item => {
    if(item) {
      item.delete()
     .then(item => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(item);
      })
     .catch(err => next(err));
    } else {
      err = new Error();
      err.status = 404;
      return next(err);
      }
  })
  .catch(err => next(err));
})

  

module.exports = router;


