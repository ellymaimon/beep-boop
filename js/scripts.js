//Business Logic

//Function that creates the pattern to be displayed to the user
function createPattern(number, userName) {
  var error = "Don't be silly. I can't do math on things that aren't a number." //Non-numbers
  var sorry = whichName(userName); //Numbers divisible by 3
  var beep = "Beep!" //Numbers with zeros
  var boop = "Boop!" //Numbers with ones
  var finalPhrase = ""; //The final phrase

  if (Number.isNaN(number) === true) {
    finalPhrase = finalPhrase.concat(error);
  } else {
      for (i = 0; i <= number; i++) {
        if (i % 3 === 0 && i !== 0) { //checks for divisibility by 3
          finalPhrase = finalPhrase.concat(sorry + " ");
        } else if (i === 1 || hasOnes(i) === true) {
          finalPhrase = finalPhrase.concat(boop + " ");
        } else if (i === 0 || hasZeros(i) === true) {
          finalPhrase = finalPhrase.concat(beep + " ");
        } else {
          finalPhrase = finalPhrase.concat(i + " ");
        }
      }
    }
  return finalPhrase;
}

//Function spits out Dave for no user name entry
function whichName(userName) {
  if (userName === "") {
    return "I'm sorry, Dave, I'm afraid I can't do that.";
  }
  else {
    return "I'm sorry, " + userName + ", I'm afraid I can't do that.";
  }
}

//Function that checks digits for ones
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

//Function that checks digits for zeros
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
  $("form").submit(function(event) {
    event.preventDefault();
    var initialNumber = parseInt($("#input-number").val());
    var userName = $("#input-name").val();
    $(".pre-submit").hide();
    $(".results").show();
    var finalAnswer = createPattern(initialNumber, userName);
    $("#final-result").text(finalAnswer);
    var audio = new Audio('audio/halbye.mp3');
    audio.play();
  });

  $("button#restart").click(function(){
    location.reload();
  });
});
