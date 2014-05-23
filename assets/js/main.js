window.WikiFind = {};

WikiFind.begin = "";
WikiFind.end   = "";

WikiFind.words = [
    // TODO
];

WikiFind.generateWord = function () {
    return WikiFind.words[Math.floor(Math.random() * WikiFind.words.length)];
};

WikiFind.toURL = function(str) {
    return 'http://en.wikipedia.org/wiki/' + str;
};

WikiFind.start = function() {
    WikiFind.begin = generateWord();
    WikiFind.end   = generateWord();

    document.getElementById('the-frame').src = WikiFind.toURL(WikiFind.begin);
    document.getElementById('url').value     = WikiFind.begin;
    document.getElementById('dest').value    = WikiFind.end;
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
};

window.onload = function() {
    WikiFind.init();
    WikiFind.start();
};
