const express = require("express");
const router = express.Router();
const isDataValid = require("../helpers/isDataValid.js");

const transactions = require("../models/transaction.json");
//get all transaction
router.get("/", (req, res) => {
  res.json(transactions);
});

//create a new transaction
router.post("/", (req, res) => {
  const { amount, name, category, from, date } = req.body;

  if (isDataValid(name, amount, date, from, category)) {
    transactions.push(req.body);
    res.json(transactions);
  } else res.status(404).json({ error: "all fields needed" });
});

//get a specific transaction
router.get("/:ind", (req, res) => {
  const { ind } = req.params;

  if (transactions[ind]) res.json(transactions[ind]);
  else res.status(404).json({ error: "page not found" });
});

//delete a specific trans
router.delete("/:ind", (req, res) => {
  const { ind } = req.params;
  if (transactions[ind]) {
    transactions.splice(ind, 1);
    res.json(transactions);
  } else res.status(404).json({ error: ` no element at ${ind}` });
});

//update a specific element
router.put("/:ind", (req, res) => {
  const { ind } = req.params;
  if (transactions[ind]) {
    transactions[ind] = req.body;
    res.json(req.body);
  } else res.status(404).json({ error: `no element to update at ${ind}` });
});

module.exports = router;
