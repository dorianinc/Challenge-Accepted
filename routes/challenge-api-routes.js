
// Dependencies
var db = require("../models");

module.exports = function (app) {

  //=====================================================================================//
  // GET ROUTE FOR GETTING ALL CHALLENGES
  //=====================================================================================//

  app.get("/api/challenges", function (req, res) {
    // IF THERE IS A USER THIS WILL GET ONLY THEIR CHALLENGES
    // var query = {};
    // if (req.query.user_id) {
    //   query.UserId = req.query.user_id;
    // }
    db.Challenge.findAll({
      include: [
        db.User
      ]
    }).then(function (dbChallenge) {
      res.json(dbChallenge);
    });
  });

  //=====================================================================================//
  // GET ROUTE FOR FINDING ONE SPECIFIC CHALLENGE
  //=====================================================================================//
  app.get("/api/challenge/:id", function(req, res) {
    db.Challenge.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbChallenge) {
      res.json(dbChallenge);
    });
  });

  //=====================================================================================//
  // POST ROUTE FOR SAVING NEW CHALLENGE
  //=====================================================================================//

  app.post("/challenge/create", function (req, res) {
    console.log("request body: " + req.body)
    db.Challenge.create(req.body).then(function (dbChallenge) {
      res.json(dbChallenge);
      console.log(dbChallenge)
    });
  });

  //=====================================================================================//
  // STILL WORKING ON THIS --- PUT ROUTE TO UPDATE CHALLENGE STATUS
  //=====================================================================================//

    app.put("/challenge/complete", function(req, res) {
      db.Challenge.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbChallenge) {
        res.json(dbChallenge);
      });
    });
  
}; // END MODULE.EXPORT OF FUNCTION


