const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/public', express.static( __dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/name-submit', function (req, res) {
    let name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(`Hello ${name}`);
});

var server = app.listen(port, function () {
    console.log('Server is running..');
});