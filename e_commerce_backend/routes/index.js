var express = require('express');
const app = require('../app');
var router = express.Router();


/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.end('stuff from server');
}); */

router.get('/products', (req, res, next) => {
      console.log(res);
      db.
      
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(res);

      
     
  })

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


