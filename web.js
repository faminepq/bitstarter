var express = require('express');
var app = express.createServer(express.logger());
var port = process.env.PORT || 5000;
var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }

app.get('/', function(request, response) {
  response.send(html.toString());
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

});