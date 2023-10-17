'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const employeeRoutes = require("./routes/Employee-routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", employeeRoutes.routes);

//to save user info in session
app.use((req, res, next) => {
  var user = firebase.auth().currentUser;
  res.locals.currentUser = user;
  next();
});

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
