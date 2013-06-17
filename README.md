WebP Images with modernizr
==========================

A very easy way to detect if the browser supports WebP images and replacing old images with new, sharper and lighter WebP-images.


### Usage

The snippet requires Modernizr with a Non-core detectino of ["img-webp"](http://modernizr.com/download/#-img_webp).
It also requires a feature coming in Modernizr 3.0.
So for now we need this [prolyfill](https://github.com/stucox/modernizr-on).


#### The Modernizr prolyfill minimized.
```html
var Modernizr=function(n,o){var r=[];n._version.split(".")[0]>2&&window.console&&console.warn("Modernizr.on prolly isn't needed from v3 onwards!");var e=function(){for(var i,t=r.length;t--;)i=r[t][0],n[i]!==o&&(r[t][1](n[i]),r.splice(t,1));r.length&&setTimeout(e,100)};return n.on=function(n,o){r.push([n,o]),setTimeout(e,0)},n}(Modernizr);
```


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




#### Feedback
If you've got any thoughts or idead about this, please  tweet at @vorback. I'm just as interested as you in new image formats and responsive techniques.