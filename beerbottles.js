


var alpaca = 99; 



var addBtn = document.querySelector('#addaline');
addBtn.addEventListener(
    'click', //event name
    function() {
        console.log('... clicked:', alpaca)
        var animals = mkBottle(alpaca);
        document.body.appendChild(mkBottle(alpaca))
        alpaca -= 1
    }
);




var mkBottle = function(alpaca) {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/alpaca1.jpg';
    return (imgElem);
}

var bodyElem = document.querySelector('body');


/*

while (alpaca >=1){
    console.log(alpaca)
    alpaca -=1

}
*/
