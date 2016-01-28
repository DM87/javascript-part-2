/*function should take two strings, and return a value that sort can use to determine which is the longest string

function sortStrings (string1, string2) {
    
  var array$ = [string1, string2].sort(this.length);
    
    
    console.log('The longest string is: ' + array$[array$.length - 1]);
    return array$;
}

console.log(sortStrings('banana', 'Apple'));
*/

var array = ['red', 'banana', 'Apple'];

array.sort(function compare (a,b) {
    if (a.length > b.length){
        return -1;
    } else if (a.length < b.length) {
        return 1;
    } else {
        return 0;
    }
});

//console.log(array)



//some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

var arrayObjects = [
    {name: 'Danny', email: 'dan@gmail.com'},
    {name: 'Ziad', email: 'aziad@gmail.com'},
    {name: 'Codrin', email: 'zcodrin@gmail.com'},
    {name: 'Nic', email: 'nic@gmail.com'}
    ];

var longestName = arrayObjects.sort(function compare(a, b) {
    if (a.name.length > b.name.length) {
        return -1;
    } else if (a.name.length < b.name.length) {
        return 1;
    } else {
        return 0;
    }
});
//console.log(longestName);

var alphabeticalEmail = arrayObjects.sort(function compare(a, b) {
    if (a.email < b.email) {
        return -1;
    } else if (a.email > b.email) {
        return 1;
    } else {
        return 0;
    }
});
//console.log(alphabeticalEmail);

//use this function with map on an array of numbers to check the result
var numbers = [1,2,3,4];

var squared = numbers.map(function multiply (a){ 
    return a * a;
});

//console.log(squared);


//This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
var newObject = [
    {num: 12, name: 'twelve'},
    {num: 10, name: 'ten'},
    {num: 14, name: 'fourteen'}
];

var squaredNumn = newObject.map(function mult(a){
    return a.num * a.num;
});

//console.log(squaredNumn);


//In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers. The end result should let me do something like this:
function operationMaker(stringOperator){
    switch (stringOperator){
        case 'mult':
            return function mult(a,b){ return a *b };
            break;
        case 'substract':
            return function subs(a,b){ return a - b };
            break;
        case 'div':
            return function div(a,b){return a/b};
            break;
        case 'add':
            return function add(a,b){return a+b};
            break;
    }
}

//console.log(operationMaker('div')(3,4));

