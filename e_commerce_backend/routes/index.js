var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 */


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
});
module.exports = router;
