/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssclasses-img_webp
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(){var a=new Image;a.onerror=function(){Modernizr.addTest("webp",!1)},a.onload=function(){Modernizr.addTest("webp",function(){return a.width==1})},a.src="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA=="}();

/*
*	Modernizr.on() prollyfill
*	https://github.com/stucox/modernizr-on
*/
var Modernizr=function(n,o){var r=[];n._version.split(".")[0]>2&&window.console&&console.warn("Modernizr.on prolly isn't needed from v3 onwards!");var e=function(){for(var i,t=r.length;t--;)i=r[t][0],n[i]!==o&&(r[t][1](n[i]),r.splice(t,1));r.length&&setTimeout(e,100)};return n.on=function(n,o){r.push([n,o]),setTimeout(e,0)},n}(Modernizr);



/*
*	WebP Images with modernizr
*	https://github.com/vincento1/WebP-Images-with-modernizr
*/
Modernizr.on('webp', function (result) {

	var images = document.getElementsByTagName('img');

	if (result) {
		for (var i = 0; i < images.length; i+= 1) {
			images[i].src = images[i].getAttribute('data-webp');
  	}
	}
	else {
		for (var i = 0; i < images.length; i+= 1) {
  		images[i].src = images[i].getAttribute('data-jpg');
		}
	}

});
