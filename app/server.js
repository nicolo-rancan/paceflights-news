const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/theme/views"));
app.use(express.static(path.join(__dirname + "/theme/public")));

app.use(["/", "/home", "/index"], (req,res) => {
  res.render("home");
});

app.listen(5000, () => {
  console.clear();
  console.log("Server online.");
})