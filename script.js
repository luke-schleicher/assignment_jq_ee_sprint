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
  var password = $(event.data.searchId)[0].value;
  var confirmPassword = current.value;

  if(!password.length || !confirmPassword.length){

    $('#p-matching-message').text("");
  }else if(password !== confirmPassword) {
    $('#p-matching-message').text("Your password don't match");
  }else{
    $('#p-matching-message').text("Your passwords match!");
    return true
  }
  return false
};

var validations = function(event){
  event.preventDefault()
  var lengthText = validationsLength( $('input[type="text"]')[0], 32, 4)
  var lengthTextFeild = validationsLength()
  var lengthPassword = validationsLength()
  var matching = passwordMatches()
};

var validationsLength = function(target, max, min){
  var value = target.value
  var length = value.length

  if(length > max){
    return "too long!"
  }else if(length < min){
    return "too short"
  }else{
    return true 
  }

};


var formListener = function() {

  $('textarea').keyup({ number: 140 }, displayCharsRemaining );
  $('input[type="text"]').keyup({ number: 32 }, displayCharsRemaining );
  $('input[type="password"]').keyup({ number: 16 }, displayCharsRemaining );

  $('#p-confirmation').keyup( { searchId: '#password' }, passwordMatches );
  $('#password').keyup( { searchId: '#p-confirmation' }, passwordMatches );

  $('input[type="submit"]').click(validations);
};


$(document).ready(function() {
  formListener();
});

