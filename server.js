require('dotenv').load();

var express      = require('express');
var app          = express();
var path         = require('path');
var http         = require('http');
var fs           = require('fs');
var bodyParser   = require('body-parser');

var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var Twit         = require('twit');
var axios        = require('axios');

var db           = require('./model/db');
var blogModel    = require('./model/blog');
var _            = require('lodash');
var router       = express.Router();
var blogRoutes   = require('./routes/blog');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

require('./config/passport')(passport);
require('./routes/userRoutes')(app, passport);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options("*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});

var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


var fetchTweets = function(req, res){

  var twitterHandle = req.params.twitterHandle;

  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 10 },
    function(error, data, response) {
      // var justTweets = [];
      // data.forEach (function(tweets) {
      //   justTweets.push(tweets.text);
      // });
      res.send(data);
  });

};

var fetchFoll = function(req, res){

  var twitterHandle = req.params.twitterHandle;

  T.get('followers/ids', { screen_name: twitterHandle },
    function(error, data, response) {
        res.send(data);
  });
};


app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile('index.html')
});

app.use   ('/api/handle/:twitterHandle', fetchTweets);
app.use   ('/api/followers/:twitterHandle', fetchFoll);
app.use   ('/api/blogs', blogRoutes);

app.use   (morgan('dev'));
app.use   (cookieParser()); 
// app.use   (bodyParser()); 

// passport config
app.use   (session({ secret: 'ilovescotchscotchyscotchscotch' })); 
app.use   (passport.initialize());
app.use   (passport.session()); 
app.use   (flash()); 
app.use   (bodyParser.urlencoded({ extended: true })) // app.use   (bodyParser.urlencoded());
app.use   (express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});