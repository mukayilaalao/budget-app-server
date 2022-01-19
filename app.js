const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./controllers/transaction.js");

//Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME TO PURSUIT BUDGET APP!!");
});
app.use("/transactions", router);

module.exports = app;
