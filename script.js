var displayCharsRemaining = function(event) {

  var current = event.target;
  var $current = $(current)

  var numChars = current.value.length;
  var charsLeft = 32 - numChars;

  if(charsLeft === 32){ 
    $current.next().text("");
  }
  else{
      $current.next().text(charsLeft + "characters left!");
    }
};

// var charsUsed = ?;

var inputListener = function() {
  $('input').keyup(displayCharsRemaining);

};


$(document).ready(function(){
  inputListener();
});

