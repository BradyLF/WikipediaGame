
window.WikiFind = {};

WikiFind.begin = "";
WikiFind.end   = "";

WikiFind.words = [];

WikiFind.words = [
    'Adult',
    'Aeroplane',
    'Air',
    'Aircraft Carrier',
    'Airforce',
    'Airport',
    'Album',
    'Alphabet',
    'Apple',
    'Arm',
    'Army',
    'Baby',
    'Baby',
    'Backpack',
    'Balloon',
    'Banana',
    'Bank',
    'Barbecue',
    'Bathroom',
    'Bathtub',
    'Bed',
    'Bee',
    'Bible',
    'Bird',
    'Bomb',
    'Book',
    'Boss',
    'Bottle',
    'Bowl',
    'Box',
    'Boy',
    'Brain',
    'Bridge',
    'Butterfly',
    'Button',
    'Cappuccino',
    'Car',
    'Car-race',
    'Carpet',
    'Carrot',
    'Cave',
    'Chair',
    'Chess Board',
    'Chief',
    'Child',
    'Chisel',
    'Chocolates',
    'Church',
    'Circle',
    'Circus',
    'Clock',
    'Clown',
    'Coffee',
    'Coffee-shop',
    'Comet',
    'Compact Disc',
    'Compass',
    'Computer',
    'Crystal',
    'Cup',
    'Cycle',
    'Data Base',
    'Desk',
    'Diamond',
    'Dress',
    'Drill',
    'Drink',
    'Drum',
    'Dung',
    'Ears',
    'Earth',
    'Egg',
    'Electricity',
    'Elephant',
    'Eraser',
    'Explosive',
    'Eyes',
    'Family',
    'Fan',
    'Feather',
    'Festival',
    'Film',
    'Finger',
    'Fire',
    'Floodlight',
    'Flower',
    'Foot',
    'Fork',
    'Freeway',
    'Fruit',
    'Fungus',
    'Game',
    'Garden',
    'Gas',
    'Gate',
    'Gemstone',
    'Girl',
    'Gloves',
    'God',
    'Grapes',
    'Guitar',
    'Hammer',
    'Hat',
    'Hieroglyph',
    'Highway',
    'Horoscope',
    'Horse',
    'Hose',
    'Ice',
    'Ice-cream',
    'Insect',
    'Jet fighter',
    'Junk',
    'Kaleidoscope',
    'Kitchen',
    'Knife',
    'Leather jacket',
    'Leg',
    'Library',
    'Liquid',
    'Magnet',
    'Man',
    'Mat',
    'Maze',
    'Meat',
    'Meteor',
    'Microscope',
    'Milk',
    'Milkshake',
    'Mis',
    'Money',
    'Monster',
    'Mosquito',
    'Mouth',
    'Nail',
    'Navy',
    'Necklace',
    'Needle',
    'Onion',
    'PaintBrush',
    'Pants',
    'Parachute',
    'Passport',
    'Pebble',
    'Pendulum',
    'Pepper',
    'Perfume',
    'Pillow',
    'Plan',
    'Planet',
    'Pocket',
    'Post-office',
    'Potato',
    'Printer',
    'Prison',
    'Pyramid',
    'Radar',
    'Rainbow',
    'Record',
    'Restaurant',
    'Rifle',
    'Ring',
    'Robot',
    'Rock',
    'Rocket',
    'Roof',
    'Room',
    'Rope',
    'Saddle',
    'Salt',
    'Sandpaper',
    'Sandwich',
    'Satellite',
    'School',
    'Sex',
    'Ship',
    'Shoes',
    'Shop',
    'Shower',
    'Signature',
    'Skeleton',
    'Slave',
    'Snail',
    'Software',
    'Solid',
    'Space Shuttle',
    'Spectrum',
    'Sphere',
    'Spice',
    'Spiral',
    'Spoon',
    'Sports-car',
    'Spot Light',
    'Square',
    'Staircase',
    'Star',
    'Stomach',
    'Sun',
    'Sunglasses',
    'Surveyor',
    'Swimming Pool',
    'Sword',
    'Table',
    'Tapestry',
    'Teeth',
    'Telescope',
    'Television',
    'Tennis racquet',
    'Thermometer',
    'Tiger',
    'Toilet',
    'Tongue',
    'Torch',
    'Torpedo',
    'Train',
    'Treadmill',
    'Triangle',
    'Tunnel',
    'Typewriter',
    'Umbrella',
    'Vacuum',
    'Vampire',
    'Videotape',
    'Vulture',
    'Water',
    'Weapon',
    'Web',
    'Wheelchair',
    'Window',
    'Woman',
    'Worm',
    'X-ray'];];];

WikiFind.generateWord = function () {
    return WikiFind.words[Math.floor(Math.random() * WikiFind.words.length)];
};

WikiFind.toURL = function(str) {
    return 'http://en.wikipedia.org/wiki/' + str;
};

WikiFind.start = function() {
    WikiFind.begin = WikiFind.generateWord();
    WikiFind.end   = WikiFind.generateWord();

    document.getElementById('the-frame').src = WikiFind.toURL(WikiFind.begin);
    document.getElementById('url').value     = WikiFind.begin;
    document.getElementById('dest').value    = WikiFind.end;
};

WikiFind.isApp = function() {
    return window.location.hash === '#app';
};

WikiFind.isDesktop = function() {
    return screen.width > 700;
};

WikiFind.isMobileWeb = function() {
    return !WikiFind.isApp() && !WikiFind.isDesktop();
};

WikiFind.init = function() {
    // Navbar
    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });

    // Portfolio
    // WTF does a portfolio need JS for?
    var portfolio = $('#portfolio');
    var items = $('.items', portfolio);
    var filters = $('.filters li a', portfolio);

    items.imagesLoaded(function() {
        items.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            transitionDuration: '0.7s'
        });
    });

    filters.click(function(){
        var el = $(this);
        filters.removeClass('active');
        el.addClass('active');
        var selector = el.attr('data-filter');
        items.isotope({ filter: selector });
        return false;
    });

    // Animations
    // Y U NO CSS3
    $('.animated').appear(function () {
        var el = $(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('showing');
                el.removeClass('hiding');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('showing');
            el.removeClass('hiding');
        }
    }, {
        accY: -60
    });

    // Service hover animation
    $('.service').hover(function(){
        $('i', this).addClass('animated tada');
    },function(){
        $('i', this).removeClass('animated tada');
    });

    // Twitter
    twitterFetcher.fetch('347101057018638336', '', 1, true, false, false, '', true, function(tweets) {
        var element = document.getElementById('feed');
        if (element) {
            var x = tweets.length;
            var n = 0;
            var html = '<ul class="list-inline">';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
        }
    }, false);

    // jQuery stuffs
    $(".loader .fading-line").fadeOut();
    $(".loader").fadeOut("slow");

    // CSS Shit
    if(WikiFind.isDesktop())
        document.body.classList.add('desktop');
    if(WikiFind.isMobileWeb())
        document.body.classList.add('mobile-web');
    if(WikiFind.isApp())
        document.body.classList.add('app');
};

window.onload = function() {
    WikiFind.init();
    WikiFind.start();
};
