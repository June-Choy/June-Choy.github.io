var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/beer.png';
    return (imgElem);
}

//Create an <img>
var bodyElem = document.querySelector('body');
 

/*
//var line1= "bottles of beer on the wall,";
//var line2 = "bottles of beer.";

//var num = 100;

//var line3 = "Take one down and pass it around,";
//var line4 = "bottles of beer on the wall.";
//var line5 = "no more bottles of beer on the wall."
//var line6= "bottle of beer on the wall,";
//var line7 = "bottle of beer.";


//var num2 = 99;


//while (num >1) {
    //num -= 1; //count = count - 1; 
    //num2 -= 1; 
    //if (num != 1)
    //console.log(num + " " + line1 + " " + num + " " + line2 + " " + line3 + " " + num2 + " " + line4)
//} if (num == 1 ) {
    //console.log(num + " " + line6 + " " + num + " " + line7 + " " + line3 + " " + line5)
//} 
    //console.log("No more bottles of beer on the wall," + " " + "no more bottles of beer." + " " + "Go to the store and buy some more," + " " + "99 bottles of beer on the wall.")


var beer = 99; //actual parameter

//var mklyrics = function(bottles){
   // return(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
    //Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`)
//}

var line1 = function(bottles){ //bottles is only a placeholder //formal parameter //interpolation
    return(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`)
}
var line2 = function(bottles){
    return(`Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`)
}  


while (beer >=1){
    console.log(line1(beer))
    console.log(line2(beer))
    console.log('\n') //empty row
    //console.log(mklyrics(beer))
    beer -=1

}
  */

