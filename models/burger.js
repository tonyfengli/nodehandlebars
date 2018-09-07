var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    create: function(vals, cb) {
      orm.create("burgers", vals, function(res) {
        cb(res);
      });
    },
    update: function(condition, cb) {
      orm.update("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  