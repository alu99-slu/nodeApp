const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const web = require('./route/web')

//databse connection
require('./db/conn');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//main page
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/users',web);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});