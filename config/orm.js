var connection = require("../config/connection.js");


var orm = {

    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, vals, cb) {
      var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, ?)"
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    update: function(table, condition, cb) {
      var queryString = "UPDATE " + table;

      queryString += " SET devoured = true WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }


  };

  module.exports = orm;
