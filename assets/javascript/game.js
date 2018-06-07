$( document ).ready(function() {

var targetNumber=55;

$("#number-to-guess").text(targetNumber);

var counter=0;

var numberOptions=[10,5,3,7];


$(".crystal-image").on("click", function() {
    counter += increment;
    alert("Your new score is " + counter);
    if (counter === targetNumber) {
        alert("You Win!");
    }
    else if (counter >= targetNumber) {
        alert("You Lose!");
    }
});



});