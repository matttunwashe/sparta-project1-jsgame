$( document ).ready(function() {

var player1Score = 0;
var player2Score = 0;
//setting the welcome message
function welcomeMessage(){
  alert("Welcome to my game");
}

//keep scores and displays it
function playGame(numOfRounds) {
  welcomeMessage();
  do {
    var player1 = playerOne();
    var player2 = playerTwo();
    var result = comparePlay(player1, player2);
    updateScores(result, 1);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);
  if (player1Score > player2Score) {
    alert("Player 1 has " + player1Score + "points compared to player 2's  " + player2Score + "points. So player 1 wins!")
  } else {
    alert("Player 2 has " + player2Score + "points compared to player 1's  " + player1Score + "points. So player 2 wins");
  }

clearScores();

//clears scores after the game finishes
function clearScores() {
  player1Score = 0;
  player2Score = 0;
}



}

//start button
  $("#start").click( function(){

  //start button fades out
    $(this).fadeOut();

  //the countdown timer
    function countdown() {
      var timer = setInterval(function() {
      var count = parseInt($('#timer').html());
        if (count !== 0) {
          $('#timer').html(count - 1);
        } else {
          alert("Game over! Your score is " + score);
          clearInterval(timer);
        }
      }, 1000);
    }
    countdown();

    //movement variables
    var x = 100;
    var y = 100;
    var score = 0;

    // Write a player two function to run the game for player 2
    // At the end of it, save score in player2Score variable
    // Also call checkForWin function
    // Write the checkForWin function to compare player1Score and player2Score
    // Have a conditional statement to give different win messages
    // depending on who won

    function playerOne(){
      //clicker button increments

      var scoreBoard = $('#score');

      $("#clicker").click(function () {
        score = score + 1;
        scoreBoard.html(score);

        //the clicker moves randomly
        var x = Math.floor(Math.random()*725);
        var y = Math.floor(Math.random()*1000);
          $("#clicker").css('margin-top', (x + "px"))
          $("#clicker").css('margin-left', (y + "px"))
          $("#clicker").css('margin-right', (y + "px"))
          $("#clicker").css('margin-bottom', (x + "px"))
      });
      player1Score = score;
      // Now call player 2 function
    }




playerOne();
  });

  //states how many round the game should run for.
  // playGame(1);

})
