$(document).ready(function () {

  // GLOBAL VARIABLES
  var userId;
  var imageUrl;
  var challengeId;
  var updating = false;
  var url = window.location.search;



  // Cloudinary 
  var fileUpload = $("#file-upload")
  var CLOUDINARY_UPLOAD_PRESET = 'pjuj0ctu'
  var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkuhmdf7w/upload'

  // jQUERY OBJECTS LINKED TO CHALLENGE SUBMIT FORM
  var pointsInput = $("#points")
  var locationInput = $("#location")
  var challengeForm = $("#challengeForm");
  var descriptionInput = $("#description");
  var challengeNameInput = $("#challengeName");
  var autocomplete;

  // Events that trigger functions
  $(fileUpload).change(handleImageUpload);
  $(challengeForm).on("submit", handleFormSubmit);


  //=====================================================================================//
  // FUNCTION THAT TAKES PULLS OUR USERS FROM THE DATABASE
  //=====================================================================================//

  function checkForUser() {

    if (url.indexOf("?challenge_id=") !== -1) {
      challengeId = url.split("=")[1];
      getChallengeData(challengeId, "challenge");
      console.log("challenge #", challengeId)
    }

    else if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
    }
  }

  //=====================================================================================//
  // FUNCTION THAT UPLOADS IMAGE TO CLOUDINARY, RAN THRU AXIOS
  //=====================================================================================//
  function handleImageUpload(event) {

    var file = event.target.files[0];
    var formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    // console.log(file);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(function (res) {
      imageUrl = res.data.secure_url
      console.log(imageUrl);
    }).catch(function (err) {
      console.error(err);
    })
  };


  //=====================================================================================//
  // FUNCTION THAT CREATES CONTENT FOR RES.BODY 
  //=====================================================================================//

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!challengeNameInput.val().trim() || !locationInput.val().trim() || !descriptionInput.val().trim() || !pointsInput.val().trim()) {
      return
    }

    var newChallenge = {
      challenge_name: challengeNameInput.val().trim(),
      location: locationInput.val().trim(),
      description: descriptionInput.val().trim(),
      points: pointsInput.val().trim(),
      image: imageUrl,
    };
      submitChallenge(newChallenge);
  }
  //=====================================================================================//
  // POST FUNCTION -- SUBMITS CHALLENGE ALONG SIDE USER WHO CREATED IT 
  //=====================================================================================//

  function submitChallenge(challenge) {
    $.post("/challenge/create", challenge, function () {
      window.location.href = "/challenges";
    });
  }


  function initializeAutoComplete() {
    console.log("Initatiated")
      autocomplete = new google.maps.places.Autocomplete((document.getElementById('location')),
          { types: ['geocode'] });
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
      });
  }
  initializeAutoComplete();
  checkForUser();
});

