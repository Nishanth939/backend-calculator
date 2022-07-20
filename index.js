const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

// The body parser is used to get the data from "index.html" File and using it for further process
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));  ==> For every time we use body-parser wehave to use this always
// bodyParser.json ==>Read Document for more methods
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  // Says (req.body.a) ==> in HTML body request of a
  var num1 = Number(req.body.a); //here String(req.body.a) is converted to interger using Number()
  var num2 = Number(req.body.b); //here String(req.body.a) is converted to interger using Number()
  var add = num1 + num2;
  res.send("The Addtion is :" + add);
  res.sendStatus(202);
});
app.listen(8000, () => {
  console.log("Running...");
});
