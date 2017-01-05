var displayCharsRemaining = function(event) {

  var current = event.target;
  var $current = $(current);

  var maxChars = event.data.number;

  var numChars = current.value.length;
  var charsLeft = maxChars - numChars;

  if (charsLeft === maxChars) {
    $current.next().text("");
  } else {
    $current.next().text(charsLeft + " characters left!");
  }

};

var passwordMatches = function(event) {

  var current = event.target;
  var $current = $(current);
  var password = $('#password')[0].value;
  var confirmPassword = current.value;

  if (password !== confirmPassword) {
    $('#p-matching-message').text("Your password don't match");
  }

};

var formListener = function() {

  $('textarea').keyup({ number: 140 }, displayCharsRemaining );
  $('input[type="text"]').keyup({ number: 32 }, displayCharsRemaining );
  $('input[type="password"]').keyup({ number: 16 }, displayCharsRemaining );

  $('#p-confirmation').keyup( passwordMatches );

};


$(document).ready(function() {
  formListener();
});

