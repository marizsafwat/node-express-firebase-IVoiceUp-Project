"use strict";
const firebase = require("../db");

const SignUp = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    var newUser = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        res.json(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(error);
        res.json({ error: errorMessage });
      });
  } catch (e) {
    res.json({ error: e.message });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    var userlogin = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        res.json(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.json({ error: errorMessage });
      });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { SignUp, login };
