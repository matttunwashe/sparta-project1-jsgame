$( document ).ready(function() {

  console.log('working');

$("#start").click( function(){


//the countdown timer
  function countdown() {
    var timer = setInterval(function() {
    var count = parseInt($('#timer').html());
    if (count !== 0) {
      $('#timer').html(count - 1);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

countdown();


//clicker button increments
  var score = 0;
  $("#clicker").click(function () {
    score = score + 1;
    // console.log(score);
    $("#count").html(score);
  })

//make the clicker move randomly
var move = document.getElementById('#clicker');

move.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  var y = Math.floor(Math.random()*1000);
  move.style.top = x + 'px';
  move.style.left = y + 'px';
};

});

})
