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

window.onload = function() {
    WikiFind.begin = generateWord();
    WikiFind.end   = generateWord();
    
};
