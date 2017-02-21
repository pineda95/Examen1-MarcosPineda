
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var logger = require('morgan');


var app = express();



mongoose.connect(db.url, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

var port = process.env.PORT || 3000;

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname,'public'))); // set the static files location /public/img will be /img for users
app.use(logger('dev'));

// routes ==================================================
app.use('/api/vuelos', personas);

//frontend
var path = require('path');
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname,'public','index.html'));
});

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
