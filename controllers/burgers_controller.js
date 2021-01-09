const express = require ("express");

const router = express.Router();

//Importing cat.js to use db functions
const burger = require("../models/burger.js");

//Create routes for api calls

//render all the burgers
router.get("/", (req, res) => {
  burger.all(data => {
    const indexObj = {
      burgers: data
    };
    console.log(indexObj);
    res.render("index", indexObj);
  });
});

//adding a new burger from the form
router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name"],
    [req.body.burger_name],
    function(result) {
      res.json({ id: result.insertID});
    });
});

//updating a burger when the devour button is pressed
router.put("/api/burgers/serve/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log(`condition ${condition}`);
  burger.update(
    {served : req.body.served},
    condition, (result) => {
      if(result.changedRows === 0) {
        return res.status(404).end();
      }
      else{
        res.status(200).end();
      }
  });
});

//complete the devouring of the burgers
router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affected === 0) {
      return res.status(404).end();
    }
    else{
      res.status(200).end();
    }
  });
});

module.exports = router;