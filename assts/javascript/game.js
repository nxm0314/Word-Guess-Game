
var movies =["chicken little","sleeping beauty","101 dalmations","snow white","finding nemo","the little mermaid"];
var randomMovies = movies[Math.floor(Math.random() * movies.length)];
var guessMovies = [];

for (var i=0; i<randomMovies.length; i++){
guessMovies[i] = "-";
}
var el = document.getElementById('guessword');
    el.innerHTML=guessMovies.join(" ");


var wrongGuesses = [];
// var eleme = document.getElementById('wrong');
//      eleme.innerHTML=wrongGuesses;

var guessesLeft = 15;
var ele = document.getElementById('remaining');
    ele.innerHTML=guessesLeft;

var wins = 0;
var elem = document.getElementById('numwins');
    elem.innerHTML=wins;

document.onkeyup = function(event) {

var userGuess = event.key;

// el.innerHTML=guessMovies.join(" ");


for(var i=0; i<randomMovies.length; i++){

    if(randomMovies[i]===userGuess) {
        guessMovies[i]=userGuess
        };

    }
    if (randomMovies.indexOf(userGuess) === -1){
        wrongGuesses.push(userGuess);
        guessesLeft --;
        var wg = document.getElementById('wrong');
        wg.innerHTML=wrongGuesses;
        
    }


    if(guessMovies === randomMovies) {
        alert("Congratulations, You Won!");
        wins++;
    
    }
    
    if(guessesLeft===0) {
        alert("You lost, it's time for a movie night!");
    }

    var el = document.getElementById('guessword');
    el.innerHTML=guessMovies.join(" ");

    var ele = document.getElementById('remaining');
    ele.innerHTML=guessesLeft;


}