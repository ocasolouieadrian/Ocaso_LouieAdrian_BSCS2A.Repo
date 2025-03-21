var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc ;
var location2 = location1 + 1 ;
var location3 = location2 + 1 ;

let guess;
let hits = 0 ;
let guesses = 0 ;

let isSunk = false ;

// game logic
while (!isSunk) {
    guess = prompt("Pick a number from 0 - 6 loser ");

    if (guess == null) {
        alert("Thank you for playing loser! ");
        break;
    }
    
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

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";

alert(stats)

// var accuracy = (3/guesses) * 100;

// var rank;

// if (accuracy > 95) {
//    rank = "S-Rank";
// } else if (accuracy > 90) {
//    rank = "A-Rank";
// } else if (accuracy > 85) {
//    rank = "B-Rank";
// } else {
//    rank = "C-Rank";
// }

// var stats = "You used " + guesses + " hits. " + " Your accuracy is " + (accuracy) + "%. " + "You ranked: " + rank;

// alert(stats);