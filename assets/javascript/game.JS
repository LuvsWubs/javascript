var guesses=["1","2","3","4","5","6","7","8","9", "10"];
var txt="";
var randomIndex=Math.floor(Math.random() *guesses.length);
//does line3 'guesses.length' multiply 10#s by 10 variables in line1 string? or does it only allow the user to play 10x?

// console.log("randomIndex", randomIndex);
var randomGuess=guesses[randomIndex];//computer guess
// console.log('random guess:' + randomGuess); 
//LOOK THIS UP-->console.dir(document) vs concole.log(document)


var question=confirm("Would you care to make a wager?");  
if (question == true) {
	txt="We will play a game of chance, your odds of winning are probability/possibility, so GOOD LUCK!";
	// console.log('question');
} else {
	 txt="Are you scared you're going to lose?";
 	 // console.log('chicken?');
};
// alert(txt)
document.getElementById("taunt").innerHTML=txt;
// } else {
// 	txt="Is that a yes or a no?";
// 	console.log('yes or no?')
// 	};
console.log("computer# "+randomGuess);

	
// var randomIndex=Math.floor(Math.random() *guesses.length);
// 	console.log('comp guess');
document.onkeyup=function(event) {
	var userGuess=String.fromCharCode(event.keyCode);
	if (randomGuess===userGuess) {
		prompt("You must be psychic! You win!");
		console.log('SAME NUMBER YA');

	} else if (userGuess<randomGuess) {
		prompt("You guessed too low. Try again?");
		console.log('too low'); 

	} else if (userGuess>randomGuess) {
		prompt("Your guess is too high. Care to try again?");
	  	console.log('too high');

	} else {
		alert("Please, only number guesses at this time! Advanced feats of prestidigitation will occur at a later date!");
	};
document.getElementById("guessForm").value=""
	// console.log('key press' + userGuess);
}
// var userGuess=event.key;

// document.getElementById("userGuess"); {
