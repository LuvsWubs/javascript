document.addEventListener("DOMContentLoaded", function() {
	// LOOK THIS UP-->console.dir(document) vs concole.log(document)

var question=confirm("Would you care to make a wager?");  {
	if (question == true) 
		{confirm("Your time in exchange for.. A game of chance!");
		console.log('make a wager?');}
 	 else
		 {alert("Are you scared you're going to lose? Try again!");
 		 console.log('chicken?');}	
 	} 

var anotherChance=confirm("Before you decide you must know that this is a game of chance. You will choose a letter. If this letter matches a letter chosen by the computer, you win! And if you cannot guess the computers letter, you lose! Your odds of winning are probability/possibility, so GOOD LUCK!"); {
 	if (anotherChance === true)
  	 	{alert("So let's play..");
  	 	console.log('anotherChance confirmed');}
  	else if (anotherChance === false)
  	 	{alert("Maybe another time?");
  	 	console.log("anotherChance another time");}
	else (anotherChance == "")
		{txt="Is that a yes or a no?";
		console.log('yes or no?');};

  	 
// console.log("cGuess", guesses);
// var cGuess=Math.floor(Math.random() *guesses.length);
// var cGuess = guesses[cGuess];//computer guess

// document.getElementById("userNumForm").innerHTML=txt;
// console.log("computers# "+randomIndex);

// for var(i=0; i<10; i++) {




var guesses=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];





var cGuess=Math.floor(Math.random() *guesses.length);
	// console.log('comp guess');
var userGuess=event.key;
	console.log('user guess:' + guesses[cGuess]); 
var custom=document.getElementById("customMessage")=function()

document.addEventListener("click", function() {
	document.getElementById("customMessage").innerHTML="You guessed "+ guesses;
		// function.onkeyup("guesses").innerHTML = txt
			for (guesses = 0; guesses < 5; guesses++) {
				
    			text += ("The computer guessed " + cGuess)
			}
})
document.onkeyup=function() {
	if (guesses[cGuess]===userGuess) {
		alert("You must be psychic! You win!");
		console.log('SAME NUMBER YA');

	} else if (userGuess!==guesses[cGuess]) {
		txt("You guessed wrong. Try again?");
		console.log('nope'); 
	} else (userGuess="") {
		txt("Please, only number guesses at this time! Advanced feats of prestidigitation will occur at a later date!");
	}
}

// function clearBox(customMessage) {
// 	document.getElementById("customMessage") = txt;


// document.getElementById("guessForm").innerHTML=txt;
	// console.log('key press' + userGuess);
// }
// var userGuess=event.key;

// document.getElementById("userGuess"); {

// });