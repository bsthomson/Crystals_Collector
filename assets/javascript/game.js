$( document ).ready(function() {
// sets number we want to reach
var targetNumber=Math.floor((Math.random() * 120) + 19);

// Where the target number will be displayed
$("#number-to-guess").text(targetNumber);
// Where the wins and losses won't be displayed
$("#losses").text(loseCounter);
$("#wins").text(winCounter);

// Counter for reaching desired numbers and win/loss counters
var counter=0;
var winCounter=0;
var loseCounter=0;

// Numbers the crystals could possibly be
var numbers=[1,2,3,4,5,6,7,8,9,10,11,12];

// Removes random numbers until only 4 are left
while (numbers.length > 4) {
    numbers.splice(numbers.length * Math.random() | 0, 1)[0];
}

// Creates the crystal images and gives each one one of the random numbers we generated above
for (var i=0; i < numbers.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal.jpg");
    imageCrystal.attr("data-crystalvalue", numbers[i]);
    $("#crystals").append(imageCrystal);
}
// Clicking the crystals increases our counter depending on which crystal we click
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue=parseInt(crystalValue);
    counter += crystalValue;
    $("#guess-total").text(counter);
    // Win condition
    if (counter == targetNumber) {
        $("#victory").text("You Win!");
        winCounter += 1;
        restart();
    }
    // Lose condition
    else if (counter >= targetNumber) {
        $("#victory").text("You Lose!");
        loseCounter += 1;
        restart();
    }
});

// Restarts the game by generating new numbers and getting rid of the previous crystals and creating four new ones with new values
var restart = function() {
    var targetNumber=Math.floor((Math.random() * 120) + 19);
    $("#number-to-guess").text(targetNumber);
    counter = 0;
    $("#guess-total").text(counter);    
    var numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
    while (numbers.length > 4) {
        numbers.splice(numbers.length * Math.random() | 0, 1)[0];
    }

    $(".crystal-image").remove();
    
    for (var i=0; i < numbers.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/crystal.jpg");
        imageCrystal.attr("data-crystalvalue", numbers[i]);
        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue=parseInt(crystalValue);
        counter += crystalValue;
        $("#guess-total").text(counter);
        if (counter == targetNumber) {
            $("#victory").text("You Win!");
            winCounter += 1;
            restart();
        }
        else if (counter >= targetNumber) {
            $("#victory").text("You Lose!");
            loseCounter += 1;
            restart();
        }
    });

}

console.log(winCounter);
console.log(loseCounter);

});