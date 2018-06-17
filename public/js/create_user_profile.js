$(document).ready(function () {

  // GLOBAL VARIABLES
  var updating = false;
  var url = window.location.search;

  // jQUERY OBJECTS LINKED TO USER SUBMIT FORM  
  var bioInput = $("#bio");  
  var nameInput = $("#name");
  var createUserForm = $("#createUser");

//=====================================================================================//
// FUNCTION THAT CREATES CONTENT FOR RES.BODY  
//=====================================================================================//

  $(createUserForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();   
    if (!nameInput.val().trim() || !bioInput.val().trim()) {
      return;
    }
    var newUser = {
      name: nameInput.val().trim(),
      bio: bioInput.val().trim(),
    };

    if (!updating) {
      submitUser(newUser);
    }
  });

//=====================================================================================//
// POST FUNCTION -- GENERATES OUR USER 
//=====================================================================================//

  function submitUser(User) {
    $.post("/user/create", User, function () {
      window.location.href = "/user-profile?user_id=" + userId;
    });
  }
  getUserData();

});
