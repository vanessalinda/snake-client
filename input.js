let connection;

// creating the input module, which is passed the connection object
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handling user inputs via keys
const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "n") {
    connection.write("Say: Nice move!");
  }

  if (key === "h") {
    connection.write("Say: Haha! You crashed!");
  }

  if (key === "b") {
    connection.write("Say: Better luck next time!");
  }
};

module.exports = { setupInput };
