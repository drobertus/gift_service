const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require('../db')
//db.setupDB()
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const gifts = require('./creator')
//var birds = require('./birds')

// ...
console.log("we are starting")

app.use("/", gifts)
console.log("gift routes up")
module.exports = app

