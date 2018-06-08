//Business Logic

//Function that creates the pattern to be displayed to the user
function createPattern(number) {
  var sorry = "I'm sorry Dave, I'm afraid I can't do that."
  var beep = "Beep!" //zeros
  var boop = "Boop!" //ones

  for (i = 0; i <= number; i++) {
    if (i % 3 === 0) {
      return sorry;
    } else if (hasOnes(i)) {
      return boop;
    } else if (hasZeros(i)) {
      return beep;
    }
  }

}

//Function that checks for ones
function hasOnes(numberInLoop) {
  var digits = numberInLoop.toString.split("");
  digits.forEach(function(digit) {
    if (digit === 0) {
      return true;
    }
  });
}

//Function that checks for zeros
function hasZeros(numberInLoop) {
  var digits = numberInLoop.toString.split("");
  digits.forEach(function(digit) {
    if (digit === 1) {
      return true;
    }
  });
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
