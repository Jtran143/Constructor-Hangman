// The completed game should meet the following criteria:


//     The completed game should be able to receive user input using the inquirer or prompt npm packages.
var inquirer = require("inquirer");
// create word file that handles the words functions
var word = require("./word.js");
// create letters file that handles letters to _ for blanks
var letters = require("./letters.js");

var totalGuessesRemaining = 10;

var words = ["Cookies", "Same", "Viaduct", "Constructors", "Haunted", "Mansion"];






//Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:
function Hangman () {
    this.start = function () {
        this.totalGuessedRemaining = 10;
        this.wordChosen();
    }
    this.wordChosen = function () {
        var randomWord = words[Math.floor(Math.random()*words.length)];
    }
}

//create inquirer prompt to
//Guess a letter message
//If guessed letter write popup letter
//If guessed wrong lose an attempt and leave all rest blank
//repeat until word is completely guesed using If statement
//If word is guessed right say you won and reset the game
//If word is guessed wrong say you lost and reset the game
//
function User(name, letter) {
    this.name = lettersAlreadyGuessed;
    this.letter = letterGuessed;
}
User.prototype.printInfo = function() {
    console.log("? Guess a letter!" + this.letter);
}

var userGuess = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Guess a letter: ",
        validate: function(value) {
            if (isNaN(value) == true) {
                return true;
            }
            else {
            	return false;
            } 
        }
    }]).then(function(answers) {
        var guess = answer.guess.toLowercase();
		
    })

}


//You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.


//Each constructor function should be in it's own file and be exported and required wherever needed.


//Look into function prototypes and use them for a few of your constructor's methods.
