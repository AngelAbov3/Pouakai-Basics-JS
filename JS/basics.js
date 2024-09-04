// basics.js

// 1. Write a variable named myName and make it a string of your name

var myName = 'Josh'
console.log(myName)

// 2. Write a variable named age and make it a number of your age

var age = '19'
console.log(age)

// 3. Write a variable named isStudent and make it a boolean that represents your status as a student

var isStudent = 'false'
console.log(isStudent)

// 4. Write a variable named favoriteColor and leave it undefined

var favoriteColor = ''
console.log(favoriteColor)

// 5. Write a variable named greeting and set it to "Hello, world!"

var greeting = 'Hello World'
console.log(greeting)

// 6. Write a variable named myUndefined and leave it undefined

var myUndefined = ''
console.log(myUndefined)

// 7. Write a variable named myFavColor and make it a string of your favorite color

var myFavColor = 'Purple'
console.log(myFavColor)

// 8. Define your favoriteColor variable as myFavColor

var favoriteColor;
favoriteColor = 'Black';
var myFavColor;
myFavColor = favoriteColor;
console.log(myFavColor)

// 9.	Write a function named addTwoNumbers that takes two numbers and returns their sum.

function addTwoNumbers(a, b){
    return a + b
}
console.log(addTwoNumbers(5, 10))

// 10.	Write a function named isEven that takes a number and returns true if the number is even, otherwise false.

function isEven (number){
  return (number & 1) === 0;
}

function isOdd (number){
  return (number & 1) === 1;
}   

console.log(isEven(5));

console.log(isEven(4));

console.log(isOdd(5));

console.log(isOdd(4));


// DO NOT CHANGE OR CODE UNDER THIS
module.exports = {
  myName,
  age,
  isStudent,
  favoriteColor,
  greeting,
  myUndefined,
  myFavColor,
};

