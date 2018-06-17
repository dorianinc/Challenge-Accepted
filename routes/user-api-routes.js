
// Dependencies
var db = require("../models");

module.exports = function(app) {

//=====================================================================================//
// GET ROUTE FOR GETTING ALL USERS
//=====================================================================================//

  app.get('/api/users', function(req, res){
    console.log(Object.keys(db));
    db.User.findAll({
      include: [
        db.Challenge,
      ]
    }).then(function(dbUser){
      console.log(dbUser)
      res.json(dbUser);
    });
  });

//=====================================================================================//
// GET ROUTE FOR GETTING ONE SPECIFIC USER
//=====================================================================================//

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Challenge]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
