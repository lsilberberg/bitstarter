var express = require('express');
var app = xepress.createServer(express.logger());

app.get('/', function(request, response) {
   var content = "My message";
   response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
