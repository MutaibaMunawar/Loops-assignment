// loops assignment... //
// .. Q 1 .. //
//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
// Initialize an empty array with the type Lesson[]
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson " + i,
        status: i % 2 === 0 ? true : false, // Alternate status between true and false
    };
    myWork.push(lesson);
}
console.log(myWork);
// .... Q 2 .... //
//2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
var maxValue = 20;
var randomNumber = Math.floor(Math.random() * maxValue + 1);
console.log(randomNumber);
var guessNumber = [13, 6, 7, 19, randomNumber];
var index = 0;
while (index < guessNumber.length) {
    var currentGuess = guessNumber[index];
    if (currentGuess === randomNumber)
        console.log(" Congratulation you guessed a correct num");
    else if (currentGuess < randomNumber) {
        console.log("Oh! you guessed is to low.");
    }
    else
        (currentGuess > randomNumber);
    {
        console.log("You guessed is to high!");
    }
    index++;
}
// // ... Q 3 ...//
// // Counter Incrementer (Using do while loop )
// //Objective: Create a program that increments a counter by a specified step value using a
// //do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// // Steps to Follow:
// // 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// // 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// // the value by which the counter will be incremented.
// // 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// // the step amount each iteration.
// // 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// // as long as the counter is less than 100.
var counter = 0;
var step = 1;
do {
    console.log(counter);
    counter += step;
} while (step < 100);
// // ... Q 4 ...//
// // Exploring Objects with for...in Loop
// // Objective: Practice working with objects in TypeScript and iterating over their properties using
// // a for...in loop.
// // Instructions:
// // 1. Create a simple object with three items:
// // o Define an object called myObject with three properties: item1, item2, and item3,
// // each with corresponding string values.
// // 2. Use a for...in loop to get properties' names and values from the object:
// // o Iterate through the properties of myObject using a for...in loop.
// // o Inside the loop, print each property's name and its corresponding value to the
// // console.
// // for in loop
// //use tp iterate over the enumerable properties of an object. It allows you to access the keys of the
// // object rather then values
// const myObject = {
//     item1: "mobile",
//     item2: "watch",
//     item3: "shirt"
// }
// for (let y in myObject){
//     console.log(`${y}: ${myObject[y]}`);
// }
// // ... Q 5 ...//
// // Exploring Arrays with Loops(Using loop )
// // Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// // to iterate through array elements.
// //for of loop is used to iterate over the values in an iterable object, such as array or a string
// // It allows you to access the object directly.
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("index: ".concat(i, ", value ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var y = myArray_1[_i];
    console.log("value: ".concat(y));
}
