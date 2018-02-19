$(document).ready(function (){
    console.log("cowboy")

    var computerChoices = ["cowboy", "horse", "wrangler", "pistol", "outlaw"];
    var guesses = 9;
    var wins = 0;
    var losses = 0;

    var usedCharacters = [];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    document.onkeyup = function(event) {
        var userGuess = event.key;
    console.log(computerGuess.indexOf(userGuess))
            usedCharacters.push(userGuess);

    var displayWord = ""

     for (var i = 0; i < computerGuess.length; i++) {
        displayWord += "_ ";

        if (computerGuess.indexOf(userGuess) >= 0) {
        $(".space").text(userGuess);
            // $(".space").append(userGuess);
            console.log("we found it")
        } else {
            $(".let").text(usedCharacters);
            guesses--;
            console.log("nope")
        }
     }
    }

    var displayWord = ""

    for (var i = 0; i < computerGuess.length; i++) {
        displayWord += "_ ";

    } console.log(displayWord)

    $(".word").append(displayWord);



  

    var html =
          "<p>guesses: " + guesses - "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>letters guessed:" + usedCharacters.join(",");
        

});
