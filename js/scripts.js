//Business Logic

//Function that creates the pattern to be displayed to the user
function createPattern(number) {
  var error = "Don't be silly. I can't do math on things that aren't a number." //Non-numbers
  var sorry = "I'm sorry Dave, I'm afraid I can't do that." //Numbers divisible by 3
  var beep = "Beep!" //Numbers with zeros
  var boop = "Boop!" //Numbers with ones
  var finalPhrase = ""; //The final phrase

if (number === NaN) {
  return error;
} else {
    for (i = 0; i <= number; i++) {
      if (i % 3 === 0 && i !== 0) {
        finalPhrase = finalPhrase.concat(sorry + " ");
      } else if (i === 1 || hasOnes(i) === true) {
        finalPhrase = finalPhrase.concat(boop + " ");
      } else if (i === 0 || hasZeros(i) === true) {
        finalPhrase = finalPhrase.concat(beep + " ");
      } else {
        finalPhrase = finalPhrase.concat(i + " ");
      }
    }
    console.log(finalPhrase);
    return finalPhrase;
  }

}

//Function that checks for ones
function hasOnes(number) {
  var digits = number.toString().split("");
  var total = 0;
  digits.forEach(function(digit) {
    if (parseInt(digit) === 1) {
     total++;
    }
  });
  if (total > 0) {
    return true;
  }
}

//Function that checks for zeros
function hasZeros(number) {
  var digits = number.toString().split("");
  var total = 0;
  digits.forEach(function(digit) {
    if (parseInt(digit) === 0) {
     total++;
    }
  });
  if (total > 0) {
    return true;
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
