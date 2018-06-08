//Business Logic
function createPattern(number) {
  var numberArray = number.split("");
  console.log(numberArray);

  for (i = 0; i <= number; i++) {

  }

}



//UI Logic
$(function() {
  $("button#submit").click(function() {


    var initialNumber = parseInt($("#input-number").val());


    console.log(initialNumber);


    $(".results").show();


    var finalAnswer = createPattern(initialNumber);


    $("#final-result").text(finalAnswer);
  });
});



// Numbers that contain a 0 are replaced (all digits) with "Beep!"
// Numbers that contain a 1 are replaced (all digits) with "Boop!"
// Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm
// afraid I can't do that."
