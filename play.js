const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

//passing the connection object to the input module
setupInput(connection);
