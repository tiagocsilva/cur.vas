const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", routes.auth);
app.use("/api/user", routes.user);
app.use("/api/question", routes.question);

module.exports = app;
