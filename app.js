var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('Requested URL: ' + req.url);
    next()
})

app.get('/', function(req, res){
    console.log('Express server listening on port 3000')
    res.send('<html><link href="/assets/style.css" rel="stylesheet"><body><h1>Hello world!</h1></body></html>')
});



app.listen(PORT);