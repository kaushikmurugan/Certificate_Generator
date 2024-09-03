const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const Routers = require("./router/index");
const cors = require("cors");

let app = express();

app.use(cors());

let PORT = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/certification")
  .then(() => {
    console.log("connected to MONGO DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/public", express.static("public")); 

app.use(Routers);

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
