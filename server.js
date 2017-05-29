//requirements
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// globals
var numbers = [];

// listen
app.listen(1234, function() {
  console.log('server up on 1234');
}); // end listen

// base url
app.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
}); // end base url

app.post('/Addition', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  var additionResult = {
    resultAdd: x + y
  };
  res.send(additionResult);
});
