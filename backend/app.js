const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const bodyparser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieparser());
app.use(bodyparser.json());

//importing routes
const post = require("./routes/post");
const user = require("./routes/user");

//using Routes

app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
