$( document ).ready(function() {

  console.log('working');

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
          alert("Your score is" + score);
      }
    }, 1000);

    }
    countdown();

    var x = 100;
    var y = 100;
    // var xd = 100;
    // var yd = 100;

  //clicker button increments
    var score = 0;
    $("#clicker").click(function () {

      score = score + 1;
      $("#count").html(score);

//the clicker moves randomly
      var x = Math.floor(Math.random()*725);
      var y = Math.floor(Math.random()*1000);
      $("#clicker").css('margin-top', (x + "px"))
      $("#clicker").css('margin-left', (y + "px"))
      $("#clicker").css('margin-right', (y + "px"))
      $("#clicker").css('margin-bottom', (x + "px"))


    });

  });

})
