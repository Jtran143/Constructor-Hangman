var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersAlreadyGuessed = [];
var lettersCorrectlyGuessed = [];      
var displayHangman;


//Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
var letter = function letter(value) {
    this.value = value;
    this.show = false;
    if (this.value == " ") {
        this.show = true;
    }
}
letter.prototype.printInfo = function() {
    if(this.show) {
        return this.value;aaaaaaaaaaaaaaaaaaaaaaaa
    return "_ ";
}

module.exports = Letter;