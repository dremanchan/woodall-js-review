/*
Jargon!!

. - dot
() - parentheses, parens
[] - square brackets, square braces
{} - curly braces
< - less than, angle brackets
> - greater than, angle brackets
/ - slash, forward slash, whack
\ - backslash
! - not, exclamation point, bang
# - pound, hash, sharp, octothorpe
*  - star, asterisk, splat
|| - or operator, pipes
&& -and operator
$ - bling, jQuery, dollar sign
NaN - not a number, bread

*/

/**
 
Primitive Data Types

    Strings     'taco'
    Numbers     23
    boolean     true/false
    undefined   undefined
    Null        Null


Complex Data Types

    Arrays      [1,2,3], [ "Hello World", "No"]
    Objects     ( firstName: "Dre")
 */

// Always use camelCase    
let firstName = 'Andre';

// <div class ="first-name">Andre</div>

// other naming conventions
// snake_case
// kebob-case
// PascalCase or UpperCamelCase
// SCREAMINGCASE

let thing = {
    x: 'Andre',
    y: 'M',
    z: 32
}

function aFunctionThatTakesTwoNumbersAndReturnsTwoSums(a, b) {
    return a+b;
}

/**

Expressions
     An expression evaluates to a single value

Operators
    An operator performs the same operation on single or multiple operands

 */


7 + 3;      // 10
sum(7,3);   //10

let aMediumSizedNumber = 7 + 4;
let anotherNumber = sum(7,3);

console.log('my fav number is', anotherNumber);
console.log('my fav number is', sum(7, 3));

// Increment Operator
anotherNumber++;
// Exact same as
anotherNumber = anotherNumber + 1; //   11


anotherNumber += 10;            //21
anotherNumber = anotherNumber + 10;

let myNumber = 5;
myNumber 5 += 3;      // 8
myNumber 5 -= 3;        // 2
myNumber 5 *= 3;     // 15
myNumber 5 /= 3;     // 1.66
myNumber 5 %= 3;     // 2

//Modulus operator gives the remainder
103 % 10 = 3

let name = 'Aba';
name += 'C';
name = name + 'C';      // Aba C

// THE TRICKY PLUS OPERATOR
// Does two things
// - Adds two numbers together (2+3 = 5)
// - Joins two strings together (concatenation)

// Anti-Values
// Values that are not values

NaN     // not a number
        // usually a type coercion error, eg. Number('abc')

// intentionally nothing
null;
// just nothing
// function with no return actually return undefined
undefined;

// a variable can also be just not defined (actually, not declared);
// Uncaught ReferenceError: variable 'whatever' is not defined

/*
CONDITIONALS
*/

if (someBoolean) {
    // then, do this
}
else {
    // Do this, if nothing else is truthy
}

// Conditional operators
if (myNumber > 8 ){
    // do whatever...
}
/*
> Greater than
>= Greater than or equal to
< Less than
<= Less than or equal to
=== Triple Equals (exactly equals)
== Double Equals (coerce type and then compare)
!== Not equals
!= Not equals (coerce types)
*/
'5' == 5
// Instead do
Number('5') + 5

valA !== valB;

/**
 Arrays and loops
    An array is a list of things

 */

let numbers = [1, 2, 3, 4, 5];
let beverages = [
    'Bubly',            index 0
    'Jasmine tea',      index 1
    'water',            index 2
    'coffee',           index 3
];

/* 
Kinds of loops
For.. of
For.. in
while
for
*/

for ( let beverage of beverages) {
    console.log(`I am drinking ${beverage}`);

    //console.log(`This is your beverage number ${i + 1}`);

}

for (let i = 0; i <= beverages.length; i++) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

for (let i = 10; i <= 100; i += 5) {
    console.log('Counting up...', i);
}
// For in Loop

for (let i in beverages){
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

// while
let forecast;
while (forecast.windSpeed < 50) {
    forecast = goAskTheWeatherService();
}
sendMessageToMortensenToStopTheCranes();

let isGameRunning = true;
while(isGameRunning) {
    nextTick();
}

$('#stopButton').on('click', function()) {
    isGameRunning = false;
}

/**
 Functions!!!!
*/

function generateSong(words, notes) {
    let song = `
    ${words} ${words} ${words}
    ${notes} ${notes} ${notes}`;

    return song;

}

let mySong = generateSong( 'hey, hey, hey', 'C F G');
console.log('check out my song', mySong);

// Function Declaration
// This is hoisted (you can call it from anywhere in the js file)
function sum(n1, n2) {
    return n1 + n2;
}

// Function Expression
// Create an anonymous function
// and assign it to a variable called sum
let sum = function(n1, n2) {
    return n1 + n2;
}

// anonymous function
function(n1, n2) {
    return n1 + n2;
}

function sayHell(
    console.log('hell');
)

function callMeTwoTimes(fn) {
    fn();
    fn();
}

callMeTwoTimes(sayHell);

// Common function in js
// "Callback function"
callMeTwoTimes(function) {
    console.log('hell');
}

$('button').on('click', onButtonClick) {
    console.log('stop clicking me');
}

function onButtonClick( {
    console.log('stop ckicking me');
})

$(document).on('ready', onReady)


function onReady(){
    console.log(soReady);
}

$(document).on('ready', function() {
    console.log('so ready');
});

