(function () {
  'use strict';

  var images = document.getElementsByTagName('img'),
    image = new Image(),
    i = 0;

  image.onerror = function () {
    for (i; i < images.length; i += 1) {
      images[i].src = images[i].getAttribute('data-jpg');
    }
  };
  image.onload = function () {
    for (i; i < images.length; i += 1) {
      images[i].src = images[i].getAttribute('data-webp');
    }
  };

  image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';

}());