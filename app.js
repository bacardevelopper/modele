/* modules used */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
/* modules used */



/* connect dbb mongoose */
mongoose.connect('mongodb+srv://bddnamedb:alfaromeo976@cluster0.it6zi.mongodb.net/bddnamedb?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex : true
})
/* use promise for work in asynchrone */
.then( () => {
	console.log("connexion in mongoDB  is ok ");
})
.catch( () => {
	console.log('connexion in mongoDB is not ok');
});
/* create app express */
const app = express();
app.use(helmet());

/* Headers // CORS # configured by express module */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* parser */
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/* console.log(" ** hello world fullstack student ** "); */

/* serve static files, and join path global */
app.use("/uploadfiles", express.static(path.join(__dirname, "uploadfiles")));
/* global middleware sauces and users */
app.use("/api/auth", (req, res) => {
    res.status(200).json({message : "message backend"});

});
/*****/
module.exports = app;