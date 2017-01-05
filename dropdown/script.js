

var dropdown = {

  toggleDropdown: function() {

    $listItem = $('#dropdown li');

    if ($listItem.hasClass('dropped')) {
      $listItem.slideUp(700).removeClass('dropped');   
    } else {
      $listItem.slideDown(700).addClass('dropped');    
    }

  }

};

var dropdownListener = function() {

 $('#dropdown').on('click', dropdown.toggleDropdown);

};

$(document).ready(function() {
  dropdownListener();
});