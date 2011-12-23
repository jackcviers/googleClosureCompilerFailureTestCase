(function(){
    var a = function (funcB, funcC){
	return funcB( "a", funcC);
    };
    window.a = a;
    return;
}).call(this);