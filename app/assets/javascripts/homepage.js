// Post image AJAX request
var postImage = function (image) {
  var formData = new FormData(); // this is a JS interface for creating a form object same as a normal html form see https://developer.mozilla.org/en-US/docs/Web/API/FormData
  formData.append('photo', image, image.name);

  var newRequest = {
    type: 'POST',
    url: 'memories',
    cache: false, // see https://api.jquery.com/jquery.ajax/
    contentType: false,  // see https://api.jquery.com/jquery.ajax/
    processData: false, // see https://api.jquery.com/jquery.ajax/
    xhrFields: { 'withCredentials': true },
    data: formData,
    success: function(response){
      console.log(response);
    },
    error: function(request, error){
      console.log(request);
      console.log(error);
    },
  };

  $.ajax(newRequest);
};

// Post image event handler
$(document).on('click', '#post-image', function() {
  var imageSelect = document.getElementById('image-select');
  var image = imageSelect.files[0];

  postImage(image);
});
