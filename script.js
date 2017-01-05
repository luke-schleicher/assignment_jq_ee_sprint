var displayCharsRemaining = function(event) {

  console.log('display chars running');

  var numChars = event.val().length;
  var charsLeft = 32 - numChars;

  console.log(numChars);

  $('<span>').insertAfter(event.target)
    .text(charsLeft);

};

// var charsUsed = ?;

var inputListener = function() {
  console.log('input listener running');
  $('input').keypress(displayCharsRemaining);

};


$(document).ready(function(){

  inputListener();

});

