$( document ).ready(function() {
  //movement variables
  var x = 100;
  var y = 100;
  var score = 0;
  var score2 = 0;
  var player1Turn = true;
  var player2Turn = false;

  //hides clicker2 from the start
  $('#clicker2').hide();

  //setting the welcome message
  function welcomeMessage(){
    $('#introModal').show();
  }

  $('#introModalClose').click(function(){
    $('#introModal').hide();
  });

  welcomeMessage();

  //start button
  $("#start").click( function(){

    //start button fades out
    $(this).fadeOut();
    //Calls the game's order
    function init() {
      if(player1Turn === true ) {
        countdown();
        playerOne();
        player1Turn = false;
        $('#clicker').attr('id', 'clicker2');
        $('#clicker2').attr('id', 'clicker');
      } else {
        changePlayer();
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
    //display modal for player2 start
    function changePlayer(){
      $('#changePlayerModal').show();
      $('#changePlayerModalClose').click(function(){
        $('#changePlayerModal').hide();
        countdownTwo();
      });
    }
    //start player2 countdown
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
    //player1 moves
    function playerOne(){
      var scoreBoard = $('#score');
      $("#clicker").click(function () {
        score = score + 1;
        scoreBoard.html(score);
        //clicker1 moves randomly
        var x = Math.floor(Math.random()*725);
        var y = Math.floor(Math.random()*1000);
        $("#clicker").css('margin-top', (x + "px"))
        $("#clicker").css('margin-left', (y + "px"))
        $("#clicker").css('margin-right', (y + "px"))
        $("#clicker").css('margin-bottom', (x + "px"))
      });
    }
    //player2 move
    function playerTwo() {
      //clicker button increments
      $('#clicker').hide();
      $('#clicker2').show();
      var scoreBoard = $('#score2');
      $("#clicker2").click(function () {
        score2 = score2 + 1;
        scoreBoard.html(score2);
        //clicker2 moves randomly
        var x = Math.floor(Math.random()*725);
        var y = Math.floor(Math.random()*1000);
        $("#clicker2").css('margin-top', (x + "px"))
        $("#clicker2").css('margin-left', (y + "px"))
        $("#clicker2").css('margin-right', (y + "px"))
        $("#clicker2").css('margin-bottom', (x + "px"))
      });
    }
    //checks if it's a win or draw
    function checkForWin() {
      if (score > score2){
        $('#player1WinModal').show();
        $('#player1WinModalClose').click(function(){
          $('#player1WinModal').hide();
        });
      } else if (score < score2){
        $('#player2WinModal').show();
        $('#player2WinModalClose').click(function(){
          $('#player2WinModal').hide();
        });
      } else if (score = score2) {
        $('#drawModal').show();
        $('#drawModalClose').click(function(){
          $('#drawModal').hide();
        });
      }
    }
  });
})
