// Post image AJAX request
var postImage = function (image) {
  var formData = new FormData(); // this is a JS interface for creating a form object same as a normal html form see https://developer.mozilla.org/en-US/docs/Web/API/FormData
  formData.append('photo', image, image.name);

  // var httpRequest = new XMLHttpRequest();
  // httpRequest.onload = function() {
  //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     if (httpRequest.status === 200) {
  //       console.log(httpRequest.responseText);
  //     } else {
  //       console.log(httpRequest.statusText);
  //     }
  //   }
  // }
  // httpRequest.onerror = function() {
  //   console.log(httpRequest.statusText);
  // }
  // httpRequest.open('POST', 'memories');
  // httpRequest.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  // httpRequest.send(formData);

  var newRequest = {
    type: 'POST',
    url: 'memories',
    contentType: false,  // see https://api.jquery.com/jquery.ajax/
    processData: false, // see https://api.jquery.com/jquery.ajax/
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
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
