var playerNumber = 0;

var wins = 0;

var losses = 0;

var goalNumber;

$('#player-number').text("Current: " + playerNumber);

function randomGoalNumber() {
  goalNumber = Math.floor(Math.random() * 100);
  $('#goal-number').text("Goal: " + goalNumber);
}

randomGoalNumber();

var whiteCrystalNumber = Math.floor(Math.random() * 10);
console.log(whiteCrystalNumber);
var purpleCrystalNumber = Math.floor(Math.random() * 10);
console.log(purpleCrystalNumber);
var blueCrystalNumber = Math.floor(Math.random() * 10);
console.log(blueCrystalNumber);
var redCrystalNumber = Math.floor(Math.random() * 10);
console.log(redCrystalNumber);

function reset(){
  randomGoalNumber();
  playerNumber=0;
  $('#player-number').text("Current: " + playerNumber);
  whiteCrystalNumber = Math.floor(Math.random() * 10);
  console.log(whiteCrystalNumber);
  purpleCrystalNumber = Math.floor(Math.random() * 10);
  console.log(purpleCrystalNumber);
  blueCrystalNumber = Math.floor(Math.random() * 10);
  console.log(blueCrystalNumber);
  redCrystalNumber = Math.floor(Math.random() * 10);
  console.log(redCrystalNumber);
}

$('#wins').html('Wins: ' + wins);

$('#losses').html('Losses: ' + losses);

function checkFinish(){
  if (playerNumber == goalNumber) {
    alert("You Win!");
    wins++;
    $('#wins').html('Wins: ' + wins);
    reset();
  } else if (playerNumber > goalNumber) {
    alert("You Lose :(");
    losses++;
    $('#losses').html('Losses: ' + losses);
    reset();
  }
}

$('#white-crystal').click(function(){
  playerNumber += whiteCrystalNumber;
  console.log(playerNumber);
  $('#player-number').text("Current: " + playerNumber);
  checkFinish();
});
$('#purple-crystal').click(function(){
  playerNumber += purpleCrystalNumber;
  console.log(playerNumber);
  $('#player-number').text("Current: " + playerNumber);
  checkFinish();
});
$('#blue-crystal').click(function(){
  playerNumber += blueCrystalNumber;
  console.log(playerNumber);
  $('#player-number').text("Current: " + playerNumber);
  checkFinish();
});
$('#red-crystal').click(function(){
  playerNumber += redCrystalNumber;
  console.log(playerNumber);
  $('#player-number').text("Current: " + playerNumber);
  checkFinish();
});
