const port = 3003;

const bodyParser = require("body-parser"); //improve parse of all things
const express = require("express"); //webserver node
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//always requisitions entries urlencoded format this server uses bodyParser for resolving. Extended...
//Express based chain of responsibility patterns

server.listen(port, () => {
  console.log("backend running on port => ", port);
});


module.exports = server