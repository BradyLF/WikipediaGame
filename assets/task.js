(function () {
        "use strict";
        var wordGen = Math.random();
        var url_setter = document.getElementById('url-setter')
        var url = document.getElementById('url')
        var the_iframe = document.getElementById('the-frame');
        if(wordGen < 0.01){
	        url.value = "Adult";
        }else if(0.01< wordGen < 0.02){
	        url.value="Aeroplane";
        }else if(0.02< wordGen < 0.03){
	        url.value="Air";
        }else if(0.03< wordGen < 0.04){
	        url.value="Aircraft";
        }else if(0.04< wordGen < 0.05){
	        url.value="Airforce";
        }else if(0.05< wordGen < 0.06){
	        url.value="Airport";
        }else if(0.06< wordGen < 0.07){
	        url.value="Album";
        }else if(0.07< wordGen < 0.08){
	        url.value="Alphabet";
        }else if(0.08< wordGen < 0.09){
	        url.value="Apple";
        }else if(0.09< wordGen < 0.1){
	        url.value="Arm";
        }else if(0.1< wordGen < 0.11){
	        url.value="Army";
        }else if(0.11< wordGen < 0.12){
	        url.value="Baby";
        }else if(0.12< wordGen < 0.13){
	        url.value="Backpack";
        }else if(0.13< wordGen < 0.14){
	        url.value="Balloon";
        }else if(0.14< wordGen < 0.15){
	        url.value="Banana";
        }else if(0.15< wordGen < 0.16){
	        url.value="Bank";
        }else if(0.16< wordGen < 0.17){
	        url.value="Barbecue";
        }else if(0.17< wordGen < 0.18){
	        url.value="Bathroom";
        }else if(0.18< wordGen < 0.19){
	        url.value="Bathtub";
        }else if(0.19< wordGen < 0.2){
	        url.value="Bed";
        }else if(0.2< wordGen < 0.21){
	        url.value="Bee";
        }else if(0.21< wordGen < 0.22){
	        url.value="Bible";
        }else if(0.22< wordGen < 0.23){
	        url.value="Bird";
        }else if(0.23< wordGen < 0.24){
	        url.value="Bomb";
        }else if(0.24< wordGen < 0.25){
	        url.value="Book";
        }else if(0.25< wordGen < 0.26){
	        url.value="Needle";
        }else if(0.26< wordGen < 0.27){
	        url.value="Paint";
        }else if(0.27< wordGen < 0.28){
	        url.value="Cup";
        }else if(0.28< wordGen < 0.29){
	        url.value="Computer";
        }else if(0.29< wordGen < 0.3){
	        url.value="Crystal";
        }else if(0.3< wordGen < 0.31){
	        url.value="Finger";
        }else if(0.31< wordGen < 0.32){
	        url.value="Fire";
        }else if(0.32< wordGen < 0.33){
	        url.value="Junk";
        }else if(0.33< wordGen < 0.34){
	        url.value="Man";
        }else if(0.34< wordGen < 0.35){
	        url.value="Meat";
        }else if(0.35< wordGen < 0.36){
	        url.value="Monster";
        }else if(0.36< wordGen < 0.37){
	        url.value="Roof";
        }else if(0.37< wordGen < 0.38){
	        url.value="Salt";
        }else if(0.38< wordGen < 0.39){
	        url.value="Pepper";
        }else if(0.39< wordGen < 0.4){
	        url.value="Train";
        }else if(0.4< wordGen < 0.41){
	        url.value="Space";
        }else if(0.41< wordGen < 0.42){
	        url.value="Moon";
        }else if(0.42< wordGen < 0.43){
	        url.value="Sun";
        }else if(0.43< wordGen < 0.44){
	        url.value="Planet";
        }else if(0.44< wordGen < 0.45){
	        url.value="Star";
        }else if(0.45< wordGen < 0.46){
	        url.value="Stomach";
        }else if(0.46< wordGen < 0.47){
	        url.value="Web";
        }else if(0.47< wordGen < 0.48){
	        url.value="Sword";
        }else if(0.48< wordGen < 0.49){
	        url.value="Torch";
        }else if(0.49< wordGen < 0.5){
	        url.value="Pyramid";
        }else if(0.5< wordGen < 0.51){
	        url.value="Rocket";
        }else if(0.51< wordGen < 0.52){
	        url.value="Prison";
        }else if(0.52< wordGen < 0.53){
	        url.value="Pillow";
        }else if(0.53< wordGen < 0.54){
	        url.value="Elephant";
        }else if(0.54< wordGen < 0.55){
	        url.value="Animal";
        }else if(0.55< wordGen < 0.56){
	        url.value="Parachute";
        }else if(0.56< wordGen < 0.57){
	        url.value="Money";
        }else if(0.57< wordGen < 0.58){
	        url.value="Meteor";
        }else if(0.58< wordGen < 0.59){
	        url.value="Perfume";
        }else if(0.59< wordGen < 0.6){
	        url.value="Ice";
        }else if(0.6< wordGen < 0.61){
	        url.value="Water";
        }else if(0.61< wordGen < 0.62){
	        url.value="Sport";
        }else if(0.62< wordGen < 0.63){
	        url.value="Navy";
        }else if(0.63< wordGen < 0.64){
	        url.value="Grapes";
        }else if(0.64< wordGen < 0.65){
	        url.value="Girl";
        }else if(0.65< wordGen < 0.66){
	        url.value="Gas";
        }else if(0.66< wordGen < 0.67){
	        url.value="Boy";
        }else if(0.67< wordGen < 0.68){
	        url.value="Fruit";
        }else if(0.68< wordGen < 0.69){
	        url.value="Car";
        }else if(0.69< wordGen < 0.7){
	        url.value="Earth";
        }else if(0.7< wordGen < 0.71){
	        url.value="Diamond";
        }else if(0.71< wordGen < 0.72){
	        url.value="Electricity";
        }else if(0.72< wordGen < 0.73){
	        url.value="Circus";
        }else if(0.73< wordGen < 0.74){
	        url.value="Alphabet";
        }else if(0.74< wordGen < 0.75){
	        url.value="Comet";
        }else if(0.75< wordGen < 0.76){
	        url.value="Light";
        }else if(0.76< wordGen < 0.77){
	        url.value="Color";
        }else if(0.77< wordGen < 0.78){
	        url.value="Science";
        }else if(0.78< wordGen < 0.79){
	        url.value="Life";
        }else if(0.79< wordGen < 0.8){
	        url.value="Comic";
        }else if(0.8< wordGen < 0.81){
	        url.value="Television";
        }else if(0.81< wordGen < 0.82){
	        url.value="Torpedo";
        }else if(0.82< wordGen < 0.83){
	        url.value="Vampire";
        }else if(0.83< wordGen < 0.84){
	        url.value="Weapon";
        }else if(0.84< wordGen < 0.85){
	        url.value="Toilet";
        }else if(0.85< wordGen < 0.86){
	        url.value="Tennis";
        }else if(0.86< wordGen < 0.87){
	        url.value="Spice";
        }else if(0.87< wordGen < 0.88){
	        url.value="Music";
        }else if(0.88< wordGen < 0.89){
	        url.value="School";
        }else if(0.89< wordGen < 0.9){
	        url.value="Language";
        }else if(0.9< wordGen < 0.91){
	        url.value="Cell";
        }else if(0.91< wordGen < 0.92){
	        url.value="Botany";
        }else if(0.92< wordGen < 0.93){
	        url.value="Family";
        }else if(0.93< wordGen < 0.94){
	        url.value="Time";
        }else if(0.94< wordGen < 0.95){
	        url.value="Weather";
        }else if(0.95< wordGen < 0.96){
	        url.value="Computer_programming";
        }else if(0.96< wordGen < 0.97){
	        url.value="Clothes";
        }else if(0.97< wordGen < 0.98){
	        url.value="Egypt";
        }else if(0.98< wordGen < 0.99){
	        url.value="America";
        }else if(0.99< wordGen <= 1.00){
	        url.value="Fun";
        }
        window.onload = function(){
	        url_setter();
	        }
                url_setter = function () {
            the_iframe.src = "http://en.wikipedia.org/wiki/" + url.value;
            };
    }());
    