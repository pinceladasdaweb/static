var http = require('http');
var static = require('node-static');
var app = http.createServer(handler);

var port = process.env.PORT || 3000;
var files = new static.Server('./public');

function handler(request, response) {
    request.addListener('end', function() {
        files.serve(request, response);
    });
}

app.listen(port);
console.log('Your server goes on localhost:' + port);