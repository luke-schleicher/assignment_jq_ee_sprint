var imgFeatures = {
  
  targetSelected: function(e) {

    var x = e.pageX;
    var y = e.pageY;
    var img = e.target;
    var $img = $('.first-img')
    if $img
      $img.css("cursor", "auto")

      $('<img src="cursor.png">').insertAfter(img)
        .css({
          "position": "absolute",
          "top": y,
          "left": x
        })

      $('<select>').insertAfter(img)
        .css({
          "position": "absolute",
          "top": y + 120,
          "left": x
        }).html("<option class= 'no-option'>  </option>")
        .append("<option> Orange </option>")
        .append("<option> Grape </option>")
        .append("<option> Mango </option>")
        .append("<option> Bob </option>")
    else 


  },

}

var imgListener = function(){
  $('.first-img').on('click', imgFeatures.targetSelected);
};


$(document).ready(function() {
  imgListener();
});