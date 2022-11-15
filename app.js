// // require function search library and load it to the local source, like import function
// const express = require('express');

// // use ./ to find the js file we create
// const examplesController = require('./controllers/examples-controller')

// when set type to module in package.json, we are able to use ES6
import express from 'express';
import examplesController from "./controllers/examples-controller.js";
import tuitsController from "./controllers/tuits-constroller/index.js"
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"


// express function creates an instance of the express library
// developers use app instance to configure the server on what to do when various types of requests are received.
const app = express();

examplesController(app);
tuitsController(app);
HelloController(app);
UserController(app)

// The server app listens to (wait at) port http://localhost:4000/, which does not collide with other web apps
app.listen(process.env.PORT || 4000)