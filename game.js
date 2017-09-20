
//win and loss counters, target score, current count

var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 51) + 20;
var counter = 0;
$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);
$("#targetNumber").html(targetNumber);
$("#currentNumber").html(counter);

//element variables

var heart = Math.floor(Math.random() * 7) + 2;
var star = Math.floor(Math.random() * 7) + 1;
var droplet = Math.floor(Math.random() * 7) + 2;
var flame = Math.floor(Math.random() * 7) + 2;

//game reset

function restartGame() {
	console.log("Resetting...")
	targetNumber = Math.floor(Math.random() * 51) + 20;
	$("#targetNumber").text(targetNumber);
	heart = Math.floor(Math.random() * 7) + 2;
	star = Math.floor(Math.random() * 7) + 2;
	droplet = Math.floor(Math.random() * 7) + 2;
	flame = Math.floor(Math.random() * 7) + 2;
	counter = 0;
	$("#currentNumber").html(counter);

}

//win and loss alerts

function win() {
	console.log("Win")
	alert("A GENUINE ALCHEMIST! YOU ARE TRULY SKILLED!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {
	console.log("Lose")
	alert("YOU ARE NOT AN ALCHEMIST! SHAMEFUL!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

//checks if current number is equal to target number

function checkWin() {
	$('#currentNumber').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
}

//Adding crystal tally to current number

$('#heart').on ('click', function(){
    counter = counter + heart;
    checkWin();
 }

$('#star').on ('click', function(){
    counter = counter + star;
    checkWin();
 }  

$('#droplet').on ('click', function(){
    counter = counter + droplet;
    checkWin();
 }  

$('#flame').on ('click', function(){
    counter = counter + flame;
    checkWin();
}

