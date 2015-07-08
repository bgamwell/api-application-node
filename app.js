var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var _ = require("underscore");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var users = [

  { id : 1,
  username : "testing",
  firstname : "testing",
  lastname : "testing",
  age : 20 },
  { id : 2,
  username : "testing",
  firstname : "testing",
  lastname : "testing",
  age : 20 }

];

app.get("/users", function(req, res) {
  res.json(users);
});

// creating a post request to create a new user
app.post("/users", function(req, res) {
  var newUser = req.body; // represents the body of the post request
  users.push(newUser);

  res.json(newUser); // returns newUser to the requester formatted in json

});

// create functionality for a form to update users

app.put("/users/:id", function (req, res) {

  var targetID = parseInt(req.params.id); // parseInt turns a string into an integer
  var foundUser = _.findWhere(users, { id: targetID });

  foundUser.username = req.body.username; // req.body always refers to form data

  foundUser.firstname = req.body.firstname;

  res.json(foundUser); // make sure to pass in the foundUser; this command returns json to the request
});

// create delete functionality - how do you make a delete on the back extended
app.delete("/users/:id", function (req, res) {
  var targetID = parseInt(req.params.id);
  var foundUser = _.findWhere(users, {id: targetID });

  var index = users.indexOf(foundUser); // using an array method to delete an object from the users array
  if (index > -1) {
    users.splice(index, 1);
  }

  res.json(foundUser); // returns a string to the requester as a string
});

app.listen(3000);
