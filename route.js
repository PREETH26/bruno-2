const express = require('express')
const logIn = require('./userController')
const route = express.Router();

route.post("/auth/login",logIn);

module.exports = route;