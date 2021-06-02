const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Hello, I'm connected");
  })

  conn.on('data', (data) =>{
    console.log('Message from the server', data);
  })
  return conn;
};

console.log("Connecting ...");
connect();