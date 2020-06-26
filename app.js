const express = require('express');
const path = require('path');
var io = require('socket.io');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index.ejs');
});



app.listen(3000, function () {
	console.log('Vous êtes bien sur le port 3000!');
});