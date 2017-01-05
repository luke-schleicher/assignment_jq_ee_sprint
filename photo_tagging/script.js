var imgFeatures = {
  
  targetSelected: function(e) {


    var x = e.pageX;
    var y = e.pageY;
    var img = e.target;

    console.log('clicked');

    $('<img src="cursor.png">').insertAfter(img)
      .css({
        "position": "absolute",
        "top": y,
        "left": x
      })

  },

}

var imgListener = function(){
  $('.first-img').on('click', imgFeatures.targetSelected);
};


$(document).ready(function() {
  imgListener();
});