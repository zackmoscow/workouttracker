const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://heroku_0h5dzfjx:n2rml4nlso2ko7heeuudg6gnrg@ds257698.mlab.com:57698/heroku_0h5dzfjx' || 'mongodb://localhost/workout', { useNewUrlParser: true , useUnifiedTopology: true });

app.use(require('./routes/api-routes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});