// declaring variables
var location1 = 3 ;
var location2 = 4 ;
var location3 = 5 ;

var guess;
var hits = 0 ;
var guesses = 0 ;

var isSunk = false ;

// game logic
while (isSunk == false) {
    guess = prompt("Pick a number from 0 - 6 loser ");

    if (guess < 0 || guess > 6) {
        alert("You Miss, Try Again Loser XD ")
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("You Hit Me >:( ")

            if (hits == 3) {
                isSunk = true;
                alert("Good work loser you have sunk my battleship! :'( ")
            }   
        } else {
            alert("You Miss, Try Again Loser XD ")
        }
    } 
}

var accuracy = (3/guesses) * 100;

var rank;

if (accuracy > 95) {
    rank = "S-Rank";
} else if (accuracy > 90) {
    rank = "A-Rank";
} else if (accuracy > 85) {
    rank = "B-Rank";
} else {
    rank = "C-Rank";
}

var stats = "You used " + guesses + " hits. " + " Your accuracy is " + (accuracy) + "%. " + "You ranked: " + rank;

alert(stats);