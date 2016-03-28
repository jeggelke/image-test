var showImage = function() {

  var imageUrl = $('input[name="image-url"]').val();
  console.log('reglar: ' + imageUrl);
  insertImage(imageUrl);
};


var insertImage = function(url) {
  var imgContainer = $('.image-container');
  //delete existing image
  $(imgContainer).empty();
  //create image object
  var newImage = document.createElement('img');
  $(newImage).addClass('actual-image');
  //set image source from url
  $(newImage).attr('src', url);
  $(imgContainer).append(newImage);
};

//ajax image stuff
var ajaxImage = function() {
$.ajax({
   url: $('input[name="image-url"]').val(),
   timeout:5000,
   success: function(e) {
     console.log('ajax: ' + e);
   },
   error: function(r,x) {

   }
});
};
