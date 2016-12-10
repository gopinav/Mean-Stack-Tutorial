var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var videos = require('./routes/videos');

var port = 3000;
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', videos);

app.use('*',function (req, res) {
    res.redirect('/');
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})