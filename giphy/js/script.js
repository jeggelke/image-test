var showGif = function() {
  //ajax image stuff
    var giphyTag = $('input[name="image-url"]').val().replace(/\s/g, '+');
    var giphyApiURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + giphyTag;
    console.log(giphyApiURL);
  $.ajax({
     url: giphyApiURL,
     timeout:5000,
     success: function(e) {
       var giphyURL = e.data.image_original_url;
       console.log(giphyURL);
       insertImage(giphyURL);
     },
     error: function(r,x) {

     }
  });

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
