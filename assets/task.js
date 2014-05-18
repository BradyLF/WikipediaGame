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
        }else if(0.2< wordGen < 0.21){
	        url.value="http://en.wikipedia.org/wiki/Bee";
        }else if(0.21< wordGen < 0.22){
	        url.value="http://en.wikipedia.org/wiki/Bible";
        }else if(0.22< wordGen < 0.23){
	        url.value="http://en.wikipedia.org/wiki/Bird";
        }else if(0.23< wordGen < 0.24){
	        url.value="http://en.wikipedia.org/wiki/Bomb";
        }else if(0.24< wordGen < 0.25){
	        url.value="http://en.wikipedia.org/wiki/Book";
        }else if(0.25< wordGen < 0.26){
	        url.value="http://en.wikipedia.org/wiki/Needle";
        }else if(0.26< wordGen < 0.27){
	        url.value="http://en.wikipedia.org/wiki/Paint";
        }else if(0.27< wordGen < 0.28){
	        url.value="http://en.wikipedia.org/wiki/Cup";
        }else if(0.28< wordGen < 0.29){
	        url.value="http://en.wikipedia.org/wiki/Computer";
        }else if(0.29< wordGen < 0.3){
	        url.value="http://en.wikipedia.org/wiki/Crystal";
        }else if(0.3< wordGen < 0.31){
	        url.value="http://en.wikipedia.org/wiki/Finger";
        }else if(0.31< wordGen < 0.32){
	        url.value="http://en.wikipedia.org/wiki/Fire";
        }else if(0.32< wordGen < 0.33){
	        url.value="http://en.wikipedia.org/wiki/Junk";
        }else if(0.33< wordGen < 0.34){
	        url.value="http://en.wikipedia.org/wiki/Man";
        }else if(0.34< wordGen < 0.35){
	        url.value="http://en.wikipedia.org/wiki/Meat";
        }else if(0.35< wordGen < 0.36){
	        url.value="http://en.wikipedia.org/wiki/Monster";
        }else if(0.36< wordGen < 0.37){
	        url.value="http://en.wikipedia.org/wiki/Roof";
        }else if(0.37< wordGen < 0.38){
	        url.value="http://en.wikipedia.org/wiki/Salt";
        }else if(0.38< wordGen < 0.39){
	        url.value="http://en.wikipedia.org/wiki/Pepper";
        }else if(0.39< wordGen < 0.4){
	        url.value="http://en.wikipedia.org/wiki/Train";
        }else if(0.4< wordGen < 0.41){
	        url.value="http://en.wikipedia.org/wiki/Space";
        }else if(0.41< wordGen < 0.42){
	        url.value="http://en.wikipedia.org/wiki/Moon";
        }else if(0.42< wordGen < 0.43){
	        url.value="http://en.wikipedia.org/wiki/Sun";
        }else if(0.43< wordGen < 0.44){
	        url.value="http://en.wikipedia.org/wiki/Planet";
        }else if(0.44< wordGen < 0.45){
	        url.value="http://en.wikipedia.org/wiki/Star";
        }else if(0.45< wordGen < 0.46){
	        url.value="http://en.wikipedia.org/wiki/Stomach";
        }else if(0.46< wordGen < 0.47){
	        url.value="http://en.wikipedia.org/wiki/Web";
        }else if(0.47< wordGen < 0.48){
	        url.value="http://en.wikipedia.org/wiki/Sword";
        }else if(0.48< wordGen < 0.49){
	        url.value="http://en.wikipedia.org/wiki/Torch";
        }else if(0.49< wordGen < 0.5){
	        url.value="http://en.wikipedia.org/wiki/Pyramid";
        }else if(0.5< wordGen < 0.51){
	        url.value="http://en.wikipedia.org/wiki/Rocket";
        }else if(0.51< wordGen < 0.52){
	        url.value="http://en.wikipedia.org/wiki/Prison";
        }else if(0.52< wordGen < 0.53){
	        url.value="http://en.wikipedia.org/wiki/Pillow";
        }else if(0.53< wordGen < 0.54){
	        url.value="http://en.wikipedia.org/wiki/Elephant";
        }else if(0.54< wordGen < 0.55){
	        url.value="http://en.wikipedia.org/wiki/Animal";
        }else if(0.55< wordGen < 0.56){
	        url.value="http://en.wikipedia.org/wiki/Parachute";
        }else if(0.56< wordGen < 0.57){
	        url.value="http://en.wikipedia.org/wiki/Money";
        }else if(0.57< wordGen < 0.58){
	        url.value="http://en.wikipedia.org/wiki/Meteor";
        }else if(0.58< wordGen < 0.59){
	        url.value="http://en.wikipedia.org/wiki/Perfume";
        }else if(0.59< wordGen < 0.6){
	        url.value="http://en.wikipedia.org/wiki/Ice";
        }else if(0.6< wordGen < 0.61){
	        url.value="http://en.wikipedia.org/wiki/Water";
        }else if(0.61< wordGen < 0.62){
	        url.value="http://en.wikipedia.org/wiki/Sport";
        }else if(0.62< wordGen < 0.63){
	        url.value="http://en.wikipedia.org/wiki/Navy";
        }else if(0.63< wordGen < 0.64){
	        url.value="http://en.wikipedia.org/wiki/Grapes";
        }else if(0.64< wordGen < 0.65){
	        url.value="http://en.wikipedia.org/wiki/Girl";
        }else if(0.65< wordGen < 0.66){
	        url.value="http://en.wikipedia.org/wiki/Gas";
        }else if(0.66< wordGen < 0.67){
	        url.value="http://en.wikipedia.org/wiki/Boy";
        }else if(0.67< wordGen < 0.68){
	        url.value="http://en.wikipedia.org/wiki/Fruit";
        }else if(0.68< wordGen < 0.69){
	        url.value="http://en.wikipedia.org/wiki/Car";
        }else if(0.69< wordGen < 0.7){
	        url.value="http://en.wikipedia.org/wiki/Earth";
        }else if(0.7< wordGen < 0.71){
	        url.value="http://en.wikipedia.org/wiki/Diamond";
        }else if(0.71< wordGen < 0.72){
	        url.value="http://en.wikipedia.org/wiki/Electricity";
        }else if(0.72< wordGen < 0.73){
	        url.value="http://en.wikipedia.org/wiki/Circus";
        }else if(0.73< wordGen < 0.74){
	        url.value="http://en.wikipedia.org/wiki/Alphabet";
        }else if(0.74< wordGen < 0.75){
	        url.value="http://en.wikipedia.org/wiki/Comet";
        }else if(0.75< wordGen < 0.76){
	        url.value="http://en.wikipedia.org/wiki/Light";
        }else if(0.76< wordGen < 0.77){
	        url.value="http://en.wikipedia.org/wiki/Color";
        }else if(0.77< wordGen < 0.78){
	        url.value="http://en.wikipedia.org/wiki/Science";
        }else if(0.78< wordGen < 0.79){
	        url.value="http://en.wikipedia.org/wiki/Life";
        }else if(0.79< wordGen < 0.8){
	        url.value="http://en.wikipedia.org/wiki/Comic";
        }else if(0.8< wordGen < 0.81){
	        url.value="http://en.wikipedia.org/wiki/Television";
        }else if(0.81< wordGen < 0.82){
	        url.value="http://en.wikipedia.org/wiki/Torpedo";
        }else if(0.82< wordGen < 0.83){
	        url.value="http://en.wikipedia.org/wiki/Vampire";
        }else if(0.83< wordGen < 0.84){
	        url.value="http://en.wikipedia.org/wiki/Weapon";
        }else if(0.84< wordGen < 0.85){
	        url.value="http://en.wikipedia.org/wiki/Toilet";
        }else if(0.85< wordGen < 0.86){
	        url.value="http://en.wikipedia.org/wiki/Tennis";
        }else if(0.86< wordGen < 0.87){
	        url.value="http://en.wikipedia.org/wiki/Spice";
        }else if(0.87< wordGen < 0.88){
	        url.value="http://en.wikipedia.org/wiki/Music";
        }else if(0.88< wordGen < 0.89){
	        url.value="http://en.wikipedia.org/wiki/School";
        }else if(0.89< wordGen < 0.9){
	        url.value="http://en.wikipedia.org/wiki/Language";
        }else if(0.9< wordGen < 0.91){
	        url.value="http://en.wikipedia.org/wiki/Cell";
        }else if(0.91< wordGen < 0.92){
	        url.value="http://en.wikipedia.org/wiki/Botany";
        }else if(0.92< wordGen < 0.93){
	        url.value="http://en.wikipedia.org/wiki/Family";
        }else if(0.93< wordGen < 0.94){
	        url.value="http://en.wikipedia.org/wiki/Time";
        }else if(0.94< wordGen < 0.95){
	        url.value="http://en.wikipedia.org/wiki/Weather";
        }else if(0.95< wordGen < 0.96){
	        url.value="http://en.wikipedia.org/wiki/Computer_programming";
        }else if(0.96< wordGen < 0.97){
	        url.value="http://en.wikipedia.org/wiki/Clothes";
        }else if(0.97< wordGen < 0.98){
	        url.value="http://en.wikipedia.org/wiki/Egypt";
        }else if(0.98< wordGen < 0.99){
	        url.value="http://en.wikipedia.org/wiki/America";
        }else if(0.99< wordGen < 1.00){
	        url.value="http://en.wikipedia.org/wiki/Fun";
        }
        window.onload = function(){
	        url_setter();
        }
                url_setter = function () {
            the_iframe.src = url.value;
        };
    }());