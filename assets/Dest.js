(function () {
        "use strict";
        var wordGen = Math.random();
        var dest = document.getElementById("dest");
        var url_setter = document.getElementById('url-setter'), url = document.getElementById('url'), the_iframe = document.getElementById('the-frame');
        if(wordGen < 0.01){
	        dest.value = "Bank";
        }else if(0.01< wordGen < 0.02){
	        dest.value="Human";
        }else if(0.02< wordGen < 0.03){
	        dest.value="Animals";
        }else if(0.03< wordGen < 0.04){
	        dest.value="Science";
        }else if(0.04< wordGen < 0.05){
	        dest.value="Math";
        }else if(0.05< wordGen < 0.06){
	        dest.value="Space";
        }else if(0.06< wordGen < 0.07){
	        dest.value="Elephant";
        }else if(0.07< wordGen < 0.08){
	        dest.value="Army";
        }else if(0.08< wordGen < 0.09){
	        dest.value="United States";
        }else if(0.09< wordGen < 0.1){
	        dest.value="Politics";
        }else if(0.1< wordGen < 0.11){
	        dest.value="Sport";
        }else if(0.11< wordGen < 0.12){
	        dest.value="Infant";
        }else if(0.12< wordGen < 0.13){
	        dest.value="Youtube";
        }else if(0.13< wordGen < 0.14){
	        dest.value="Facebook";
        }else if(0.14< wordGen < 0.15){
	        dest.value="Drum";
        }else if(0.15< wordGen < 0.16){
	        dest.value="Computer";
        }else if(0.16< wordGen < 0.17){
	        dest.value="McDonalds";
        }else if(0.17< wordGen < 0.18){
	        dest.value="Love";
        }else if(0.18< wordGen < 0.19){
	        dest.value="Sadness";
        }else if(0.19< wordGen < 0.2){
	        dest.value="Aristotle";
        }else if(0.2< wordGen < 0.21){
	        dest.value="Bank";
        }else if(0.16< wordGen < 0.17){
	        dest.value="Barbecue";
        }else if(0.17< wordGen < 0.18){
	        dest.value="Bathroom";
        }else if(0.18< wordGen < 0.19){
	        dest.value="Bathtub";
        }else if(0.19< wordGen < 0.2){
	        dest.value="Bed";
        }else if(0.2< wordGen < 0.21){
	        dest.value="Bee";
        }else if(0.21< wordGen < 0.22){
	        dest.value="Bible";
        }else if(0.22< wordGen < 0.23){
	        dest.value="Bird";
        }else if(0.23< wordGen < 0.24){
	        dest.value="Bomb";
        }else if(0.24< wordGen < 0.25){
	        dest.value="Book";
        }else if(0.25< wordGen < 0.26){
	        dest.value="Needle";
        }else if(0.26< wordGen < 0.27){
	        dest.value="Paint";
        }else if(0.27< wordGen < 0.28){
	        dest.value="Cup";
        }else if(0.28< wordGen < 0.29){
	        dest.value="Computer";
        }else if(0.29< wordGen < 0.3){
	        dest.value="Crystal";
        }else if(0.3< wordGen < 0.31){
	        dest.value="Finger";
        }else if(0.31< wordGen < 0.32){
	        dest.value="Fire";
        }else if(0.32< wordGen < 0.33){
	        dest.value="Junk";
        }else if(0.33< wordGen < 0.34){
	        dest.value="Man";
        }else if(0.34< wordGen < 0.35){
	        dest.value="Meat";
        }else if(0.35< wordGen < 0.36){
	        dest.value="Monster";
        }else if(0.36< wordGen < 0.37){
	        dest.value="Roof";
        }else if(0.37< wordGen < 0.38){
	        dest.value="Salt";
        }else if(0.38< wordGen < 0.39){
	        dest.value="Pepper";
        }else if(0.39< wordGen < 0.4){
	        dest.value="Train";
        }else if(0.4< wordGen < 0.41){
	        dest.value="Space";
        }else if(0.41< wordGen < 0.42){
	        dest.value="Moon";
        }else if(0.42< wordGen < 0.43){
	        dest.value="Sun";
        }else if(0.43< wordGen < 0.44){
	        dest.value="Planet";
        }else if(0.44< wordGen < 0.45){
	        dest.value="Star";
        }else if(0.45< wordGen < 0.46){
	        dest.value="Stomach";
        }else if(0.46< wordGen < 0.47){
	        dest.value="Web";
        }else if(0.47< wordGen < 0.48){
	        dest.value="Sword";
        }else if(0.48< wordGen < 0.49){
	        dest.value="Torch";
        }else if(0.49< wordGen < 0.5){
	        dest.value="Pyramid";
        }else if(0.5< wordGen < 0.51){
	        dest.value="Rocket";
        }else if(0.51< wordGen < 0.52){
	        dest.value="Prison";
        }else if(0.52< wordGen < 0.53){
	        dest.value="Pillow";
        }else if(0.53< wordGen < 0.54){
	        dest.value="Elephant";
        }else if(0.54< wordGen < 0.55){
	        dest.value="Animal";
        }else if(0.55< wordGen < 0.56){
	        dest.value="Parachute";
        }else if(0.56< wordGen < 0.57){
	        dest.value="Money";
        }else if(0.57< wordGen < 0.58){
	        dest.value="Meteor";
        }else if(0.58< wordGen < 0.59){
	        dest.value="Perfume";
        }else if(0.59< wordGen < 0.6){
	        dest.value="Ice";
        }else if(0.6< wordGen < 0.61){
	        dest.value="Water";
        }else if(0.61< wordGen < 0.62){
	        dest.value="Sport";
        }else if(0.62< wordGen < 0.63){
	        dest.value="Navy";
        }else if(0.63< wordGen < 0.64){
	        dest.value="Grapes";
        }else if(0.64< wordGen < 0.65){
	        dest.value="Girl";
        }else if(0.65< wordGen < 0.66){
	        dest.value="Gas";
        }else if(0.66< wordGen < 0.67){
	        dest.value="Boy";
        }else if(0.67< wordGen < 0.68){
	        dest.value="Fruit";
        }else if(0.68< wordGen < 0.69){
	        dest.value="Car";
        }else if(0.69< wordGen < 0.7){
	        dest.value="Earth";
        }else if(0.7< wordGen < 0.71){
	        dest.value="Diamond";
        }else if(0.71< wordGen < 0.72){
	        dest.value="Electricity";
        }else if(0.72< wordGen < 0.73){
	        dest.value="Circus";
        }else if(0.73< wordGen < 0.74){
	        dest.value="Alphabet";
        }else if(0.74< wordGen < 0.75){
	        dest.value="Comet";
        }else if(0.75< wordGen < 0.76){
	        dest.value="Light";
        }else if(0.76< wordGen < 0.77){
	        dest.value="Color";
        }else if(0.77< wordGen < 0.78){
	        dest.value="Science";
        }else if(0.78< wordGen < 0.79){
	        dest.value="Life";
        }else if(0.79< wordGen < 0.8){
	        dest.value="Comic";
        }else if(0.8< wordGen < 0.81){
	        dest.value="Television";
        }else if(0.81< wordGen < 0.82){
	        dest.value="Torpedo";
        }else if(0.82< wordGen < 0.83){
	        dest.value="Vampire";
        }else if(0.83< wordGen < 0.84){
	        dest.value="Weapon";
        }else if(0.84< wordGen < 0.85){
	        dest.value="Toilet";
        }else if(0.85< wordGen < 0.86){
	        dest.value="Tennis";
        }else if(0.86< wordGen < 0.87){
	        dest.value="Spice";
        }else if(0.87< wordGen < 0.88){
	        dest.value="Music";
        }else if(0.88< wordGen < 0.89){
	        dest.value="School";
        }else if(0.89< wordGen < 0.9){
	        dest.value="Language";
        }else if(0.9< wordGen < 0.91){
	        dest.value="Cell";
        }else if(0.91< wordGen < 0.92){
	        dest.value="Botany";
        }else if(0.92< wordGen < 0.93){
	        dest.value="Family";
        }else if(0.93< wordGen < 0.94){
	        dest.value="Time";
        }else if(0.94< wordGen < 0.95){
	        dest.value="Weather";
        }else if(0.95< wordGen < 0.96){
	        dest.value="Computer_programming";
        }else if(0.96< wordGen < 0.97){
	        dest.value="Clothes";
        }else if(0.97< wordGen < 0.98){
	        dest.value="Egypt";
        }else if(0.98< wordGen < 0.99){
	        dest.value="America";
        }else if(0.99< wordGen < 1.00){
	        dest.value="Fun";
        }
    }());