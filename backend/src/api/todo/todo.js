const restful = require('node-restful')  //create over mongoose api
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})
//module

module.exports = restful.model('Todo', todoSchema)