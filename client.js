const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('data', (serverMessage) => {
    console.log('Message from server: ', serverMessage);
  });

  conn.on('connect', () => {
    console.log('connected');
  });

  return conn;
};

module.exports = {connect};
