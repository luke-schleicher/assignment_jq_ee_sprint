var imgFeatures = {
  
  targetSelected: function(e) {

    // plop down box
    var x = e.pageX;
    var y = e.pageY;
    var img = e.target;

    console.log('clicked');

    $('<div>').insertAfter(img)
      .css('background: red, height: 100px, width: 100px ');

  },

}

var imgListener = function(){
  $('.first-img').on('click', imgFeatures.targetSelected);
};


$(document).ready(function() {
  imgListener();
});