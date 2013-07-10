var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new buffer("Hello World from index.html", "index");
  buffer.toString('index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
