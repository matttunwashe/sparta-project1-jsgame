$( document ).ready(function() {

  console.log('working');

  // var movementOptions = ["margin-top", "margin-left", "margin-right","margin-bottom"]

  $("#start").click( function(){

    $(this).fadeOut();
  //the countdown timer
    function countdown() {

    // $(this).fadeIn();
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
      // console.log(score);
      $("#count").html(score);

      var x = Math.floor(Math.random()*300);
      var y = Math.floor(Math.random()*300);

      $("#clicker").css('margin-top', (x + "px"))
      $("#clicker").css('margin-left', (y + "px"))

    });




  });

})
