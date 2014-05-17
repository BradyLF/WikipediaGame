(function () {
        "use strict";
        var wordGen = Math.random();
        var url_setter = document.getElementById('url-setter'), url = document.getElementById('url'), the_iframe = document.getElementById('the-frame');
        if(wordGen < 0.01){
	        url.value = "http://net.net";
        } if(wordGen > 0.5){
	        url.value="http://hello.com";
        }
        
        
        
        
        
        
        url_setter.onload = function (event) {
            event.preventDefault();
            the_iframe.src = url.value;
        };
    }());