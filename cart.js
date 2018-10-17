//var fruits = [];

//for(var i = 0; i < 2; i++) {
  //fruits.push(prompt ('Add a fruit!'));
//}


//var msg = `The contents of your cart are: ${fruits}`;
//console.log(msg);

var fruits = [];

var item = "";
while (item != "done") {
    item = prompt('Add your fruits')
    if ((item != null) && (item !="")) {
        fruits.push(item);
    }
}
fruits.pop();
console.log('The contents of your cart are', fruits)
