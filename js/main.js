$( document ).ready(function() {

  //movement variables
  var x = 100;
  var y = 100;
  var score = 0;
  var player1Score = 0;
  var player2Score = 0;
  player1Turn = true;
  player2Turn = false;
  //setting the welcome message
  function welcomeMessage(){
    alert("Welcome to my game");
  }

  //start button
  $("#start").click( function(){
    welcomeMessage();

  //start button fades out
    $(this).fadeOut();

    function init() {
      countdown();
      if(!$('#player1Score').html()) {
        playerOne();
      } else {
        playerTwo();
      }
    }

    init();
  //the countdown timer
    function countdown() {
      var timer = setInterval(function() {
      var count = parseInt($('#timer').html());
        if (count !== 0) {
          $('#timer').html(count - 1);
        } else {
          // alert("Game over! Your score is " + score);
          if (player1Score !== 0) {
            $('#player2Score').html(score);
          } else {
            $('#player1Score').html(score);
          }
          clearInterval(timer);

          // Bring back start button
          // For Player 2

          // $("#start").fadeIn();

          if (player1Turn = true) {

          } else {

          }

        }
      }, 1000);
    }




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




    function playerTwo() {
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
      player2Score = score;
      // Now call player 2 function
    }

    // function playerTurn(player1Score, player2Score) {
    //   if (playerOne > playerTwo){
    //     ////playerTwo turn to playerTwo
    //
    //
    //
    //
    //
    //   }
    // }

    // function compareWins(player1Score, player2Score) {
    //   if (player1Score > player2Score){
    //     alert("Player 1 wins " + player1Score)
    //   } else {
    //     alert("Player 2 wins" + player2Score)
    //   }
    // }



  // playerTwo();
  });

  //states how many round the game should run for.
  // playGame();

})

// Create variables for player1turn and player2turn
// player1turn = true player2turn = false

// In the countdown function, have it do an if else statement
// to check whose turn it is
// IF it's player one's turn: add to player1score id span
// AND THEN when time is up:
// Save what's in player1score into a variable called player1score
// AND THEN set player1turn to false and player2turn to true
// AND THEN call the countdown function again

// When countdown clals again, it'll go to the else statement
// In the else statement, have it now add to player2Score id span
// AND THEN when time is up:
// Save what's in player2score into a varaible called player2Score
// AND THEN: Call the check for win function
