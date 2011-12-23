(function(){
    var b = function (msg, func){
	return func(msg + ' b');
    };
    window.b = b;
    return;
}).call(this);

