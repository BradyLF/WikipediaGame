(function () {
        "use strict";
        var wordGen = Math.random();
        var url_setter = document.getElementById('url-setter'), url = document.getElementById('url'), the_iframe = document.getElementById('the-frame');
        if(wordGen < 0.01){
	        url.value = "http://en.wikipedia.org/wiki/Adult";
        }else if(0.01< wordGen < 0.02){
	        url.value="http://en.wikipedia.org/wiki/Aeroplane";
        }else if(0.02< wordGen < 0.03){
	        url.value="http://en.wikipedia.org/wiki/Air";
        }else if(0.03< wordGen < 0.04){
	        url.value="http://en.wikipedia.org/wiki/Aircraft";
        }else if(0.04< wordGen < 0.05){
	        url.value="http://en.wikipedia.org/wiki/Airforce";
        }else if(0.05< wordGen < 0.06){
	        url.value="http://en.wikipedia.org/wiki/Airport";
        }else if(wordGen > 0.1){
	        url.value="http://en.wikipedia.org/wiki/Airport";
        }
        
        
        
        
        
        
        url_setter.onsubmit = function (event) {
            event.preventDefault();
            the_iframe.src = url.value;
        };
    }());