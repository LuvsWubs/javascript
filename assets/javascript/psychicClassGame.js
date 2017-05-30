console.log("working");
var guesses=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var cGuess=Math.floor(Math.random() * guesses.length);
	console.log(cGuess);

document.onkeyup=function(event) {
	// var letter=document.getElementById("userGuess");
	console.log(event);
	var userGuess=event.key;
	console.log(userGuess);
	// letter.value = letter.value.toLowerCase();
	if userGuess==cGuess {
		document.getElementById("results").innerHTML="you're fucking awesome, you guessed " + userGuess;
	} else userGuess!==cGuess {
		document.getElementById("results").innerHTML="hahahahahahaha. No."
	}
}



