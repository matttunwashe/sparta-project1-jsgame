$( document ).ready(function() {

  //movement variables
  var x = 100;
  var y = 100;
  var score = 0;
  var score2 = 0;
  // var player1Score = 0;
  // var player2Score = 0;
  var player1Turn = true;
  var player2Turn = false;
  $('#clicker2').hide();
  //setting the welcome message
  function welcomeMessage(){
    alert("Welcome to my game");
  }
      welcomeMessage();

  //start button
  $("#start").click( function(){
  //start button fades out
    $(this).fadeOut();

    function init() {
      if(player1Turn === true ) {
        countdown();
        playerOne();
        player1Turn = false;
        $('#clicker').attr('id', 'clicker2');
        $('#clicker2').attr('id', 'clicker');
      } else {
        changePlayer();
        countdownTwo();
        playerTwo();
        player2Turn = false;
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
          clearInterval(timer);
          init();
        }
      }, 1000);
    }

    function changePlayer(){
      alert("Player 2 ready");
    }

    function countdownTwo() {
      var timer2 = setInterval(function() {
      var count2 = parseInt($('#timer2').html());
        if (count2 !== 0) {
          $('#timer2').html(count2 - 1);
        } else {
          clearInterval(timer2);
          checkForWin();
        }
      }, 1000);
    }


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
      // score = score;
    }

    function playerTwo() {
      //clicker button increments
      $('#clicker').hide();
      $('#clicker2').show();
      var scoreBoard = $('#score2');
        $("#clicker2").click(function () {
          score2 = score2 + 1;
          scoreBoard.html(score2);

        //the clicker moves randomly
        var x = Math.floor(Math.random()*725);
        var y = Math.floor(Math.random()*1000);
          $("#clicker2").css('margin-top', (x + "px"))
          $("#clicker2").css('margin-left', (y + "px"))
          $("#clicker2").css('margin-right', (y + "px"))
          $("#clicker2").css('margin-bottom', (x + "px"))
      });
    }

    function checkForWin(score, score2) {
      if (score > score2){
        alert("Player 1 wins " + score);
      } else {
        alert("Player 2 wins" + score2);
      }
    }

  });
})
