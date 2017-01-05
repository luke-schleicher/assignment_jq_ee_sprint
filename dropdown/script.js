

var dropdown = {

  toggleDropdown: function() {

    $listItem = $('#dropdown li:not(.top-display)');

    if ($listItem.hasClass('dropped')) {
      $listItem.slideUp(700).removeClass('dropped');   
    } else {
      $listItem.slideDown(700).addClass('dropped');    
    }

  },

  clickElement: function(event){
    $topItem = $(".top-display")
    value = event.target.innerText
    $topItem.text(value)
  }

};

var dropdownListener = function() {

 $('#dropdown').on('click', dropdown.toggleDropdown);
 $('li:not(.top-display)').on('click', dropdown.clickElement)

};

$(document).ready(function() {
  dropdownListener();
});