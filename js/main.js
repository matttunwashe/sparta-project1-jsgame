$( document ).ready(function() {

  console.log('working');



//clicker button increments
  var score = 0;
  $("#start").click(function () {
    score = score + 1;
    console.log(score);
  })

});
