$( document ).ready(function() {

  console.log('working');

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

});



//var count = document.getElementById('countdown');
// timeoutfn = function(){
//        count.innerHTML = parseInt(count.innerHTML) - 1;
//        setTimeout(timeoutfn, 1000);
// };
// setTimeout(timeoutfn, 1000);
