var imgFeatures = {
  
  targetSelected: function(e) {

    var x = e.pageX;
    var y = e.pageY;
    var img = e.target;
    var $img = $('.first-img');

    if ($img.hasClass('is-selecting') === true) {

      $img.removeClass('is-selecting');

      $img.css("cursor", "url(cursor.png), crosshair");

      var $lastImage = $('img').last();

      if (!$lastImage.hasClass('saved')) {
        $lastImage.remove();
      }
      
      $('select').last().remove();

    } else {

      $img.addClass('is-selecting');

      $img.css("cursor", "auto");

      $('<img src="cursor.png">').insertAfter(img)
        .css({
          "position": "absolute",
          "top": y,
          "left": x
        });

      $('<select>').insertAfter(img)
        .css({
          "position": "absolute",
          "top": y + 120,
          "left": x
        }).html("<option class= 'no-option'>  </option>")
        .append("<option> Orange </option>")
        .append("<option> Grape </option>")
        .append("<option> Mango </option>")
        .append("<option> Bob </option>");
    }

  },

  nameSelect: function(e) {

    console.log('name select ran');

    var $select = $('select').last();
    var $option = $select.children("option:selected").last

    if ($select.hasClass('no-option')) {
    } else {
      var $img = $('img').last()
      $img.addClass('saved');
      $('<span>').insertAfter($img)
      .text($(e.target).text())

      this.targetSelected
    }

  }

}

var imgListener = function(){
  $('body').on('change', 'select', imgFeatures.nameSelect);
  $('.first-img').on('click', imgFeatures.targetSelected);
};


$(document).ready(function() {
  imgListener();
});