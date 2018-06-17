var challenges = [];

$(document).ready(function () {

    //Global Variables
    var userId;
    var url = window.location.search;
    var challengeContainer = $(".challenge-container");


    //GOING TO ADD THIS TO A FUNCTION
    if (url.indexOf("?User_id=") !== -1) {
        userId = url.split("=")[1];
        getChallenges(userId);
    }
    else {
        getChallenges();
    }
    //=====================================================================================//
    // FUNCTION THAT PULLS CHALLENGES FROM DATABASE
    //=====================================================================================//

    function getChallenges(user) {
        userId = user || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/challenges" + userId, function (data) {
            challenges = data;
            initializeCards();
        });
    }
    //=====================================================================================//
    // FUNCTION THAT FOR-LOOPS THRU OUR CHALLENGES OBJECT
    //=====================================================================================//

    function initializeCards() {
        console.log("Challenges", challenges);
        var challengesToAdd = [];
        for (var i = 0; i < challenges.length; i++) {
            challengesToAdd.push(createCards(challenges[i]));
        }
        challengeContainer.append(challengesToAdd);
    }
    //=====================================================================================//
    // FUNCTION THAT TAKES GENERATES ALL HTML WITHIN CHALLENGES CONTAINER
    //=====================================================================================//

    function createCards(challenge) {

        console.log("creating cards")
        // Variables for Challenges Construct
        var challengeRow = $("<div>")
        challengeRow.addClass("row")
        var challengeCard = $("<div>");
        challengeCard.addClass("col s12 m7");
        var challengeCardHeading = $("<div>");
        challengeCardHeading.addClass("card");
        var cardImageContainer = $("<div>");
        cardImageContainer.addClass("card-image");
        var cardImage = ("<img class='responsive-img' src='" + challenge.image + "'>")
        var challengeTitle = $("<span>");
        challengeTitle.addClass("card-title")
        challengeTitle.text(challenge.challenge_name + " ");
        var cardContent = $("<div>");
        cardContent.addClass("card-content")
        var challengeAuthor = $("<p>");
        challengeAuthor.text("Created by: " + challenge.challenge_maker);
        challengeAuthor.css({ "margin-top": "-8px" });
        var challengeLocation = $("<p>");
        challengeLocation.text("Location: " + challenge.location);
        challengeLocation.css({ "margin-bottom": "20px" })
        var challengeBody = $("<p>");
        challengeBody.text(challenge.description);
        challengeBody.css({ "font-size": "20px" })
        var challengeAction = $("<div>")
        challengeAction.addClass("card-action")
        var optionOne = $("<button>");
        optionOne.addClass("challengeAccepted")
        optionOne.text("Challenge Accepted!");
        optionOne.click(function () {
            $.post("/challenge/accept", function (data) {

            });
        })
        var points = $("<a>")
        points.css({ float: "right" })
        points.text("Points: " + challenge.points)
        //   var formattedDate = new Date(challenge.createdAt);
        //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

        // APPENDS
        challengeRow.append(challengeCard);
        challengeCard.append(challengeCardHeading);
        challengeCardHeading.append(cardImageContainer)
        challengeCardHeading.append(cardContent);
        cardImageContainer.append(cardImage);
        cardImageContainer.append(challengeTitle);
        cardContent.append(challengeAuthor);
        cardContent.append(challengeLocation);
        cardContent.append(challengeBody);
        challengeCardHeading.append(challengeAction);
        challengeAction.append(optionOne);
        challengeAction.append(points);
        // newChallengeDate.text(formattedDate);
        // newChallengeTitle.append(newPostDate);

        challengeRow.data("challenge", challenge);
        return challengeRow;
    }

    initializeCards();

});
