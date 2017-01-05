FormFunctions = {

  displayCharsRemaining: function(event) {

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

  },

  passwordMatches: function(event) {

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
      return true;
    }
    return "password does not match";
  },

  validations: function(event){

    event.preventDefault();
    $('#error-messages').text('');

    var toValidate = [],
        errors = [];

    toValidate.push([$('input[type="text"]').eq(0), 32, 4]);
    toValidate.push([$('textarea').eq(0), 140, 4]);
    toValidate.push([$('input[type="password"]').eq(0), 16, 4]);
    $('#p-confirmation').eq(0).removeClass('error')


    toValidate.forEach(function(el) {
      var result = validationsLength(el[0][0], el[1], el[2])
      errors.push(result);
      el[0].removeClass('error')
      if(typeof result === "string"){
        el[0].addClass('error')
      }
    });

    var eventObject = {
      target: $('#password')[0],
      data: {
        searchId: '#p-confirmation'
      }
    };

    var matching = passwordMatches(eventObject);
    errors.push(matching)
    var noErrors = true
    
    errors.forEach(function(el) {
      if (el === true) {
      } else {
        noErrors = false
        $('#error-messages').append(el);
        if(el === "password does not match"){
          $('input[type="password"]').addClass('error');
        }
      }
    });

    if(noErrors){
      alert("You succeeded! Good Job!")
    }

  },

  validationsLength: function(target, max, min){
    var value = target.value;
    var length = value.length;

    if(length > max){
      return target.tagName + " too long! ";

    }else if(length < min){
      return target.tagName + " too short! ";
    }else{
      return true;
    }

  }

}

var formListener = function() {

  $('textarea').keyup({ number: 140 }, FormFunctions.displayCharsRemaining );
  $('input[type="text"]').keyup({ number: 32 }, FormFunctions.displayCharsRemaining );
  $('input[type="password"]').keyup({ number: 16 }, FormFunctions.displayCharsRemaining );

  $('#p-confirmation').keyup( { searchId: '#password' }, FormFunctions.passwordMatches );
  $('#password').keyup( { searchId: '#p-confirmation' }, FormFunctions.passwordMatches );

  $('input[type="submit"]').click(FormFunctions.validations);
};


$(document).ready(function() {
  formListener();
});

