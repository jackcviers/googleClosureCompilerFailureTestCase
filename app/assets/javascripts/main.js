require('a');
require('b');
require('c');

(function(){
    window.$(
      function(){
	  var a, b, c;
	  a = window.a;
	  b = window.b;
	  c = window.c;
	  $ = window.$;
	  $('p#detail').html( $('p#detail').html()+'<p>'+a(b,c)+'</p>');
      }
    );
}).call(this);