$(document).ready(function () {

  //GLOBAL VARIABLES
  var userId;
  var bioInput;
  var userNameInput;
  var url = window.location.search;

  // jQUERY OBJECTS LINKED TO CHALLENGE PROFILE OBJECTS
  var bio = $('#bio')
  var userName = $('#userName')

  // LINKED TO ON.CLICK FUNCTION
  $(document).on("click", "#createChallenge", createChallenge);
  $(document).on("click", "#viewChallenge", viewChallenge);

  //=====================================================================================//
  // FUNCTION THAT CONFIRMS THERE IS A USER
  //=====================================================================================//

  function checkForUser() {

    if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
      checkUserId(userId);
    }
    else {
      // window.location.href = "/challenges";
    }
  }
  //=====================================================================================//
  //  FUNCTION THAT HELPS ASSOCIATE THE RIGHT USER WITH THE RIGHT CONTENT
  //=====================================================================================//

  function checkUserId(user) {
    var userId = user || "";
    if (userId) {
      $.get("api/users?user_id=" + userId, function (data) {
        var i = userId - 1;
        userNameInput = data[i].name;
        bioInput = data[i].bio
        // console.log(data[i].points_earned)
        loadUser();
      });
    }
  }
  //=====================================================================================//
  // FUNCTION THAT LOADS IN USER INFO 
  //=====================================================================================//

  function loadUser() {
    bio.append("<p>" + bioInput + "</p>")
    userName.append(userNameInput)
  }

  //=====================================================================================//
  //  ON.CLICK TO VIEW CHALLENGES 
  //=====================================================================================//

  function viewChallenge() {
    window.location.href = "/challenges?user_id=" + userId;
    console.log("ViewChallenge", userId)
  }
  //=====================================================================================//
  //  ON.CLICK TO CREATE CHALLENGE
  //=====================================================================================//

  function createChallenge() {
    window.location.href = "/create-challenge?user_id=" + userId;
    console.log("CreateChallenge", userId)
  }
  checkForUser();
});
//=====================================================================================//
// 
//=====================================================================================//

