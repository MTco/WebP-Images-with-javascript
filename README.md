WebP Images with Javascript
==========================

> WebP is a new image format that provides lossless and lossy compression for images on the web. WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are 25-34% smaller in size compared to JPEG images at equivalent SSIM index. WebP supports lossless transparency (also known as alpha channel) with just 22% additional bytes. Transparency is also supported with lossy compression and typically provides 3x smaller file sizes compared to PNG when lossy compression is acceptable for the red/green/blue color channels.

*- [Google](https://developers.google.com/speed/webp/)*

This script offers a very easy way to detect if the browser supports WebP images and it replaces old images with new, sharper, faster and lighter WebP-images.

## Usage
Here is the HTML, with a `<noscript>` fallback.
```html
<img data-jpg="image.jpg" data-webp="image.webp">
<noscript><img src="image.jpg"></noscript>
```

And here is the javascript that takes the `data-attribute` from which ever image is supported and puts it as src of the `img`-tag.
```javascript
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
```

## Other soultions

#### HTML
This is the prefered version of course but we have to wait for [better browser support](http://caniuse.com/#feat=picture).
```html
<picture>
  <source srcset="/path/to/image.webp" type="image/webp">
  <img src="/path/to/image.jpg" alt="">
</picture>
```

#### .htaccess
This is the javascript solution. A far more easier solution is to a use the .htaccess file. [Read more here](https://github.com/vincentorback/WebP-images-with-htaccess).

## Feedback
If you’ve got any thoughts or ideas about this, please make an [issue](https://github.com/vincentorback/WebP-images-with-javascript/issues), a [pull request](https://github.com/vincentorback/WebP-images-with-javascript/pulls) or hit me up on [Twitter](https://twitter.com/vorback)!
I’m just as interested as you in new image formats and responsive techniques.
