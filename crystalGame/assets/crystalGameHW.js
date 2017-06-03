<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<title> The Crystal Game</title>
		<style> 
			body {
				/*background-image: url('https://pixabay.com/get/ef35b30d2df61c22d9584518a33219c8b66ae3d110b4184292f3c47f/gem-602252_1920.jpg')*/
			}
			img {
				height: 250px;
				width: 300px;	
			}
			#instructions {
				background-color: orange;
				padding: 20px 25px 20px 25px;
			}
			#instructions2 {
				background-color: orange;
			}
			#score {
				background-color: orange;
			}
			#tally {
				background-color: orange;
			}
		</style>
	</head>
	<body>
			<div class= "jumbotron text-center">
			<h1>Crystal Game</h1>
			</div>
				<div class="container">
					<div class="row" id="instructions">
						<h3>Every set of crystal lips has a different number associated with it. Click them to increase your total number. If you can match the target number you win! If you overshoot the target number you lose but you can always try again!</h3>
					</div>
					<br>
	  				<!-- <div class="row"> -->
	    				<div class="col-sm-4" id="targetInstructions">
	      					<h3>Target Number</h3>
	      						<p>Match this number with your guesses!</p>
	    				</div>
	    			</div>	
	    			<br>
	    			<div class="crystals">
	    				<div class="col-lg-3 col-md-3 col-sm-3">
	    					<a id="c1" value="3">
	    						<img class="img-responsive" src="http://img.funtema.ru/24092016/crystallips/3.jpg" >
	    					</a>
	    				</div>	
	    				<div class="col-lg-3 col-md-3 col-sm-3">
	    					<a id="c2" value="5">
	    						<img class="img-responsive" src="https://4.bp.blogspot.com/-faitajNDpds/V_EgTUAin1I/AAAAAAAALeo/L5edXVykfcgH9docoHbXwMtQdBu38h1awCLcB/s400/uotv42rfhhtsmsesnaqp.jpg">
	    					</a>
	    				</div>
	    				<div class="col-lg-3 col-md-3 col-sm-3">
	    					<a id="c3" value="8">
	    						<img class="img-responsive" src="https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16585645_900749546728704_2265106777714458624_n.jpg">
	    					</a>
	    				</div>
	    				<div class="col-lg-3 col-md-3 col-sm-3">
	    					<a id="c4" value="2">
	    						<img class="img-responsive" src="https://dy6g3i6a1660s.cloudfront.net/QtPQ0nO4CAXwvf4N_3RTOAHgAWg/mt-2d/perfect-glittery-lips-make-up-tutorial-labbra-glitterate-perfette.jpg">
	    					</a>
						</div>
					</div>
					<div class="totals">
						<div class="col-lg-6 col-md-6 col-sm-6" id="tally">
							<span>Total click tally: <p id="totalTally"></p></span>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3" id="score">	
							<span>Wins: 0<p id="wins"></p></span>
							<span>Losses: 0<p id="loses"></p></span>
						</div>
					</div>
				</div>	
	<script type= "text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){


		// var tally = crystalValue;
		// var newTotal = crystalValue + tally;
		var targetNum = Math.floor(Math.random()*20);
		var win;
		var lose;
		// var crystalValue = [3, 5, 8, 2];

		// for(var i=0; i<crystalValue.length; i++) {

		// }
		$("#c1").click(function(){
			var c1value = $(this).attr("value");
			console.log(c1value);


		})
		$("#c2").click(function(){
			var c2value = $(this).attr("value");
			console.log(c2value);


		})
		$("#c3").click(function(){
			var c3value = $(this).attr("value");
			console.log(c3value);


		})
		$("#c4").click(function(){
			var c4value = $(this).attr("value");
			console.log(c4value);


		})

		// $(".crystals").click(function(){
		// 	crystal value + tally =newTotal
		// 	if newTotal<targetNum
		// 		allow another guess
		// 	else newTotal = targetNum
		// 		++ wins
		// 	else if newTotal>targetNum
		// 		++ loses		 
		// })
		// $(".crystals").on("click", function() {
		// 	document.getElementById.innerHTML("totalTally") = newTotal;
		// 	if (#totalTally) == (targetNum);
		// 		$(document).append.innerHTML("wins")= "++";
		// 		$(targetNum)=newTotal+targetNum;
		// 	else 
		// 		$(document).append.innerHTML("loses")="++";	

		// });
	});
	</script>
</body>
</html>

