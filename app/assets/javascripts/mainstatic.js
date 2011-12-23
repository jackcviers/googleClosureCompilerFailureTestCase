(function(){
    var c = function(msg){
	return msg+" c.";
    };
    window.c = c;
    return;
}).call(this);
(function(){
    var b = function (msg, func){
	return func(msg + ' b');
    };
    window.b = b;
    return;
}).call(this);
(function(){
    var a = function (funcB, funcC){
	return funcB( "a", funcC);
    };
    window.a = a;
    return;
}).call(this);
(function(){
    window.$(
	     function(){
		 var a, b, c;
		 a = window.a;
		 b = window.b;
		 c = window.c;
		 $ = window.$;
		 $('p#detail').html( $('p#detail').html()+'<p>'+a(b,c)+'</p>' );
	     }
	     );
}).call(this);