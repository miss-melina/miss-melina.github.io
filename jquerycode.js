	/*
	$(document).ready(function(){
		alert("CURRENTLY UNDER CONSTRUCTION");
	});
	*/
	
var main = function() {
	/*alert("UNDER CONSTRUCTION");	*/
	     $('.slide-left').click(function(){
                //animate image position left
                
                $('img').animate({ left: '+=100px'},500);
            });
}

$(document).ready(main);



