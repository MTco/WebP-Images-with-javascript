WebP Images with Modernizr
==========================

> WebP is a new image format that provides lossless and lossy compression for images on the web. WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are 25-34% smaller in size compared to JPEG images at equivalent SSIM index. WebP supports lossless transparency (also known as alpha channel) with just 22% additional bytes. Transparency is also supported with lossy compression and typically provides 3x smaller file sizes compared to PNG when lossy compression is acceptable for the red/green/blue color channels.

*- Google*

This script offers a very easy way to detect if the browser supports WebP images and it replaces old images with new, sharper, faster and lighter WebP-images.
  
  
### Usage

The snippet requires Modernizr with a detection of ["img-webp"](http://modernizr.com/download/#-img_webp).
It also requires a feature coming in Modernizr 3.0.
So for now we need this [prolyfill](https://github.com/stucox/modernizr-on).

#### The Javascript images replacement function. (replacing .png to .webp).
```html
Modernizr.on('webp', function (result) {
	$('img').each(function() {
		var img = this;
		if (result) {
			$(img).attr('src',function(i,e){
				return e.replace(".png",".webp");
			});
		}
	});
});
```
  
  
#### Help
As you might have seen from the code above, this will replace all 'img' tags on the whole page, event if there is no webp image to replace the png with.
If you have a way to work around this, please let me know!

#### Feedback
If you've got any thoughts or idead about this, please  tweet at [@vorback](https://twitter.com/vorback).
I'm just as interested as you in new image formats and responsive techniques.