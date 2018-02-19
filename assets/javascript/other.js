$(document).ready(function (){
    console.log("cowboy")

    var computerChoices = ["cowboy", "horse", "cactus", "saloon", "wagon", "wrangler", "saddle"];

var guesses = 9;
var wins = 0;
var losses = 0;
var correctGuess = [];
var yesNo = [];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    document.onkeyup = function(event) {
        var userGuess = event.key;
    console.log(computerGuess.indexOf(userGuess))


        if (computerGuess.indexOf(userGuess) >= 0) {
            $(".word").append(userGuess);

            console.log("we found it")
        } else {
            $(".other").append(guesses--);
            console.log("nope")
        }
        if (guesses === 0) {
            alert("You Lose!"), losses++;
        }

    };

    var displayWord = ""
    
    for (var i = 0; i < computerGuess.length; i++) {
        displayWord += "_ ";
        }
    }

    console.log(displayWord)

    $(".word").append(displayWord);


});



///////
$(document).ready(function (){
    console.log("cowboy")

    var computerChoices = ["cowboy", "horse", "cactus", "saloon", "wagon", "wrangler", "saddle"];
   
    var guesses = 9;
    var wins = 0;
    var losses = 0;
   
    var userGuess = event.key;
   
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    document.onkeyup = function(event) {
       var userGuess = event.key;

        if (computerGuess.indexOf(userGuess) >= 0){
            console.log("yes")
        }
        else console.log("no")
        
        var displayWord = "";

       for (var i=0; i < computerGuess.length; i++) {
           displayWord += "_ ";

           if (userGuess === correctGuess[i]) {
               $(".word").text(userGuess)
           }
       }






    };
});


 // for (j = 0; j < winningPhrase.length; i++) {
            //     if (currentGuess === displayWord[i]) {
            //         displayWord[i] = winningPhrase[i];
            //         containsCorrect = true;
            //     };

currentLetters = computerGuess.split("");
    blanks = currentLetters.length;
    console.log(computerGuess)

    function checkLetters(letter) {
        var letterinWord = false;
        for (var j = 0; j < blanks; j++) {
            if (computerGuess[i] === letter) {
        letterinWord = true;
            }
        }
        if (letterinWord) {
            for (var j = 0; j < blanks; j++) {
                if (computerGuess[i] = letter) { yesNo[i] = letter
                }
            }
            else 
        } console.log(yesNo);
    }
    //////
    var displayWord = ""
var currentGuess = userGuess;

    for (var i = 0; i < computerGuess.length; i++) {
    displayWord += "_ ";
        if (currentGuess[i] === userGuess[i]) {
            lettersGuessed = true;
        }
        }

};
//////
var displayWord = computerGuess.split('');
    blanks = displayWord.length;
function checkLetters(letters) {
    for (var i = 0; i < displayword.length; i++) {
        var letterInWord = false;
    } console.log(displayWord)
}
    $(".word").append(displayWord);

    var html =
          "<p>guesses: " + guesses - "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";

///////////
var userGuess = event.key;
    var currentGuess = userGuess;
    var displayWord = "";
    
    for (var i = 0; i < computerGuess.length; i++) {
        displayWord += "_ ";
    } console.log(displayWord)

    for (i = 0; i < winningPhrase.length; i++) {

        // correct guess event
        if (currentGuess === displayword[i]) {
            displayWord[i] = winningPhrase[i];
            containsCorrect = true;
        }
    }
    $(".word").append(displayWord);
  
///////
if (currentGuess.indexOf(computerGuess) >= 0) {
    displayWord[i] === answerArr[i];
    userGuess === true;
} $(".word").append(currentGuess);

// else {
//     userGuess === false;
// } $(".other").append(guesses--);