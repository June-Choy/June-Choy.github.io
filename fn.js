console.log('functions');

var pi = 3.4;
var greetings = function(name = 'anon') {//(name, name2, name3) 
console.log('Hello', name)
};

greetings('Fred');
greetings('Barney');
greetings('Betty');
greetings();

var sum = function(a,b) {
    var total = a + b;
    return (total);
}
var result = sum(3,4)
var moreresult = sum(sum(3,4), sum(6,7))
console.log('3+4/(6+7) =', moreresult)

