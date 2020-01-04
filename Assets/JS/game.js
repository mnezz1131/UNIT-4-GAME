//values of crystals
var crystal = {
  aqua:{
      name: "aqua",
      value:0
  },
  blue:{
      name: "blue",
      value:0
  },
  pink:{
      name: "pink",
      value:0
  },
  red:{
      name: "red",
      value:0
  },
  
  };

var targetScore   =0;  
var currentScore  =0;
// Win and loss counters
var winCount      =0;
var lossCount     =0;

//Funtions============================================================================================

//Function for generating my random number to Guess===================================================
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//==========================================================================================

//Starts the game and restarts the game
var startGame = function() {

  //Reset Current score
  currentScore = 0;
  
  //Set a new target score
  targetScore = getRandom(19,120);
  
  //Set a new random  scores for each of the variables
  crystal.aqua.value = getRandom (1,12);
  crystal.blue.value = getRandom (1,12);
  crystal.pink.value = getRandom (1,12);
  crystal.red.value  = getRandom (1,12);
  
  //Change html to reflect changes
  $(document).ready(function() {
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    });  

  // Testing COnsole
  console.log("---------------------------------------------------------------------------")
  console.log("Target Score: " + targetScore);
  console.log("Current Score: " + currentScore);
  console.log("Aqua: " + crystal.aqua.value);
  console.log("Blue: " + crystal.blue.value);
  console.log("Pink Score: " + crystal.pink.value);
  console.log("Red Score: " + crystal.red.value);
  console.log("---------------------------------------------------------------------------")
}
//============================================================================================================
//Passes the crystal variable through the function, able to get value associated with each crystal responding to the clicks
var addValues = function(crystal) {
  
  //Changes the current score
  currentScore = currentScore + crystal.value;
  
  //Change the HTML to reflect changes in the current score
  $("#yourScore").html(currentScore);
  
  //Calls the checkWin Function
  checkWin();
  console.log("Your Score: " + currentScore);
}
//============================================================================================================

//Check if user won or lost
var checkWin = function(){

  //Check to see if current score is larger than target score
    
  if (currentScore > targetScore){
     alert("YOU LOST!!");
     console.log("YOU LOST!");
     
    //Add to Loss counter 
     lossCount++;
  
  //Updates the loss count in html
     $("#losses").html(lossCount);

  //Restarts the game
     startGame();
  
} else if (currentScore == targetScore){
    alert("YOU  WON!!");
    console.log("YOU WON!!");
  //Add to the win counter
       winCount++;
  //Changes Html to update the win counter
    $("#wins").html(winCount);
  //Restarts the game
    startGame();
}
}

//Calls the Start Game function and Starts the game
startGame();

$(document).ready(function() {

$("#aqua").click (function() {
  //alert("test");
  addValues(crystal.aqua);
//  console.log(currentScore)
});

$("#blue").click (function() {
  //alert("test");
  addValues(crystal.blue);
 // console.log(currentScore)
});

$("#pink").click (function() {
   // alert("test");
   addValues(crystal.pink);
   //console.log(currentScore)
});

 $("#red").click (function() {
     // alert("test");
     addValues(crystal.red);
    // console.log(currentScore)
});




});




