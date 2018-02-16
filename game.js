
$(document).ready(function (){
    console.log("cowboy")

    var computerChoices = ["cowboy", "horse", "cactus"];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    document.onkeyup = function(event) {
        var userGuess = event.key;
    console.log(computerGuess.indexOf(userGuess))

        if (computerGuess.indexOf(userGuess) >= 0) {
            
            console.log("we found it")
        } else {
            console.log("nope")
        }

    }

    var displayWord = ""

    for (var i = 0; i < computerGuess.length; i++) {
        displayWord += "_ ";
    } console.log(displayWord)

    $(".word").append(displayWord);

    // 
    // if (userGuess)


});


////////////////////////////////
$(document).ready(function() {

    // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
    // ...
    var randomNumber = Math.floor(Math.random() * 10)
    
    $("#random-button").on("click", function () {
      $("#random-number").html(randomNumber);
    });

    // $("#random-number").on("click", function (randomNumber){
    //   alert(randomNumber);
    // });

    // ...

  });

