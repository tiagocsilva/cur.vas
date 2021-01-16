const CONFIG = require("../src/config");
const app = require("../src/app");
var http = require("http");

http.createServer(app).listen(CONFIG.PORT, function() {
  console.log(`Running in port => ${CONFIG.PORT}`);
});
