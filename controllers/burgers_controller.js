// import express
var express = require("express");

// import model
var burger = require("../models/burger.js")

// create router
var router = express.Router();

// routes
// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  // router.post("/burgers/create", function(req, res) {
  router.post("/", function(req,res){
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, false
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/");
      // res.json({ burger_name: req.body.burger_name, 
      //   devoured: false, 
      //   id: result.insertId });
    });
  });
  
  // router.put("/burgers/:id", function(req, res) {
  router.put("/:id", function (req, res){
    var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    burger.update({
      devoured: true,
    }, condition, function(result) {
      // res.redirect("/");
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// export router
module.exports = router;