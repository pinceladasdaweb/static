var http   = require('http'),
	static = require('node-static'),
	app    = http.createServer(handler),
	port   = process.env.PORT || 3000,
	files  = new static.Server('./public', { cache: 7200 });

function handler(request, response) {
    request.addListener('end', function() {
        files.serve(request, response);
    }).resume();
}

app.listen(port);
console.log('Your server goes on localhost:' + port);