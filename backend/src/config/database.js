const mongoose = require("mongoose");
//mapping js objects go to mongo database and open direct connection CRUD operations

mongoose.Promise = global.Promise; //remove adv message for api promises for node

module.exports = mongoose.connect("mongodb://localhost/todo");
