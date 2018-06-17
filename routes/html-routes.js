
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/views/index.html"));      
        res.redirect('/challenges')
    });

    // Create_user.html Route
    app.get("/create-user", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/create_user_profile.html"));
    });
    // Create_challenge.html Route
    app.get("/create-challenge", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/create_challenge.html"));
    });

    // User_profile.html Route
    app.get("/user-profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/user_profile.html"));
    });

    // challenge.html Route
    app.get("/challenges", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/challenge.html"));
    });

    // User_profile.html Route
    app.get("/complete-challenge", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/complete_challenge.html"));
    });


};
