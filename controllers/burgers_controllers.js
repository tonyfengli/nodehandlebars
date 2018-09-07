var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

module.exports = router;

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    
    console.log(data);
    res.render("index", { burger: data });
  });
});


router.post("/api/burgers", function(req, res) {
  burger.create([req.body.name, req.body.devoured], function(data) {
    
    console.log(data);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});