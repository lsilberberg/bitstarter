var express = require('express');
var app = epress.createServer(express.logger());

app.get('/', function(request, response) {
   
   var fs = require('fs');
   var content = fs.readFileSync('index.html', 'utf-8'); 
   var buf = new Buffer(content);
   response.send(buf.toString(buf));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
