const Todo = require("./todo");

Todo.methods = ["get", "post", "put", "delete"];  //Set crud operations

Todo.updateOptions({new: true, runValidators: true}); 
// for default update not validates forms and this responses will be returned unaltered data. 
//Setting new:true this returns new alterations updated. runValidators defines in update schema runValidators. Important maintaining this validators settings true. 

module.exports = Todo
//restful calls api from mongodb