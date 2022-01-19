const express = require("express");
const router = express.Router();

const transactions = require("../models/transaction.json");
//get all transaction
router.get("/", (req, res) => {
  res.json(transactions);
});

//create a new transaction
router.post("/", (req, res) => {
  transactions.push(req.body);
  res.json(transactions);
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
