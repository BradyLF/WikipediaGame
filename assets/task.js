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
        }else if(0.06< wordGen < 0.07){
	        url.value="http://en.wikipedia.org/wiki/Album";
        }else if(0.07< wordGen < 0.08){
	        url.value="http://en.wikipedia.org/wiki/Alphabet";
        }else if(0.08< wordGen < 0.09){
	        url.value="http://en.wikipedia.org/wiki/Apple";
        }else if(0.09< wordGen < 0.1){
	        url.value="http://en.wikipedia.org/wiki/Arm";
        }else if(0.1< wordGen < 0.11){
	        url.value="http://en.wikipedia.org/wiki/Army";
        }else if(0.11< wordGen < 0.12){
	        url.value="http://en.wikipedia.org/wiki/Baby";
        }else if(0.12< wordGen < 0.13){
	        url.value="http://en.wikipedia.org/wiki/Backpack";
        }else if(0.13< wordGen < 0.14){
	        url.value="http://en.wikipedia.org/wiki/Balloon";
        }else if(0.14< wordGen < 0.15){
	        url.value="http://en.wikipedia.org/wiki/Banana";
        }else if(0.15< wordGen < 0.16){
	        url.value="http://en.wikipedia.org/wiki/Bank";
        }else if(0.16< wordGen < 0.17){
	        url.value="http://en.wikipedia.org/wiki/Barbecue";
        }else if(0.17< wordGen < 0.18){
	        url.value="http://en.wikipedia.org/wiki/Bathroom";
        }else if(0.18< wordGen < 0.19){
	        url.value="http://en.wikipedia.org/wiki/Bathtub";
        }else if(0.19< wordGen < 0.2){
	        url.value="http://en.wikipedia.org/wiki/Bed";
        }

        
        
        
        
        
        
        url_setter.onsubmit = function (event) {
            event.preventDefault();
            the_iframe.src = url.value;
        };
    }());