
var winsValuesElement = document.querySelector("#winsValues");
var lossesValuesElement = document.querySelector("#lossesValues");
var guessesLeftElement = document.querySelector("#guessesLeft");
var guessesSoFarElement = document.querySelector("#guessesSoFar");
var winsValues = 0;
var lossesValues = 0;
var guessesLeft = 10;
var guessesSoFar = "";


function init() {
    winsValuesElement.innerHTML = winsValues;
    lossesValuesElement.innerHTML = lossesValues;
    guessesLeftElement.innerHTML = guessesLeft;
    guessesSoFarElement.innerHTML = guessesSoFar;
}


function play() {
    if (event.key == chosenLetter) {
        winsValues = winsValues + 1;
        winsValuesElement.innerHTML = winsValues;
        reset();

    } else {
        if (guessesSoFar.indexOf(event.key) > -1) {
            console.log("already guessed");
            return
        }
        if (guessesSoFar.length == 0) {
            guessesSoFar = guessesSoFar + event.key;
        } else {
            guessesSoFar = guessesSoFar + ", " + event.key;
        }
        guessesSoFarElement.innerHTML = guessesSoFar;
        guessesLeft = guessesLeft - 1;
        guessesLeftElement.innerHTML = guessesLeft;
        if (guessesLeft == 0) {
            lossesValues = lossesValues + 1;
            lossesValuesElement.innerHTML = lossesValues;
            reset();
        }
    }
}

function reset() {
    guessesLeft = 10;
    guessesSoFar = "";
    guessesLeftElement.innerHTML = guessesLeft;
    guessesSoFarElement.innerHTML = guessesSoFar;
    chosenLetter = generateLetter();
}


function generateLetter() {
    var letters = ('a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var result = letters;

    return result;
}

init()
var chosenLetter = generateLetter();
document.onkeyup = play;




   