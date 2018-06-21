
//i created a variable that is an array of strings
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//variable of objects that indicates all of what will be displayed
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//keyboard event with a function parameter of event
document.onkeyup = function(event) {

//a math.random to execute the lenght of my choices in my array
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    /*if statement executes a statement of the userGuess/ numGuesses/ wins
    losses*/
    
    if (options.indexOf(userGuess) > -1) {
        
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }
        
        if (userGuess != computerGuess) {
            numGuesses --;
            guessChoices.push(userGuess);
        }
        
        if (numGuesses === 0) {
            
            numGuesses = 9;
            losses ++;
            guessChoices = [];
            
            
        }
    //created a variable to connect to my h1/h4 and my divs and para. along with a query.selector(document.keyevent)    
        var html = 
        "<h1> The Psychic Game </h1>" +
        "<h4>Guess what letter I'm thinking of</h4>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
        
        document.querySelector("#game").innerHTML = html;
        
        
    }
};