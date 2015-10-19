var blogRand = [];
img[0]='/infocom.gif';
img[1]='/index-head.jpg';

function getRandomImage(imgAr, path) {
    path = '../images/blog-random'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}


