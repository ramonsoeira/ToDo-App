const express = require("express");

module.exports = (server) => {
  //Api routes
  const router = express.Router();
  server.use("/api", router); //using /api gain access for api consumers

  //toD0 Routes

  const todoService = require('../api/todo/todoService');
  todoService.register(router, "/todos") //register methods imports Todo.methods in todoService.js. calling register, you use in router the array crud available methods

};
