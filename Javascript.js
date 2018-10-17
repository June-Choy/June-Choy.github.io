//var toguess = 3;

//read in a number


//var userInput = prompt('Type a number between 1–10');
//convert string to number
//var userGuess = parseInt(userInput);


//if (toguess == userGuess) {

//console.info('You read my memory');

//} else if (toguess > userGuess) {
     //console.warn('Your guess is lower than my number')
   // }
     //else if (toguess < userGuess) {
        //console.warn('Your guess is higher than my number')
      // }


var userInput = parseInt (prompt('Enter multiplication base'));

var count = 0;

while (count < 12) {
    count += 1; //count = count + 1; 
    var result = userInput * count;
    console.log(userInput + "*" + count + "=" + result)
}

