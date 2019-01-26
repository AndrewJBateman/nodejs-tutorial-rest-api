const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods', 
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use('/feed', feedRoutes);

mongoose
	.connect(
		'mongodb+srv://user1:2vE6ll3YrUEJm9y3@cluster0-kaj5u.azure.mongodb.net/messages?retryWrites=true', 
		{ useNewUrlParser: true }
	)
  .then(result => {
    app.listen(8080, () => {
			console.log('listening on port', 8080);
		});
  })
  .catch(err => console.log(err));
