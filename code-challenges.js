// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//Function name will be longerFruitName and there will be two inputs. I have named these parameters firstFruit, secondFruit.

//Start with function declaration (longerFruitName) with two parameters (firstFruit, secondFruit)
const longerFruitName = (firstFruit, secondFruit) => {
    //This step checks the length of the string in const fruit1 to the length of string in const fruit2. If the length of fruit1 is longer, it will return the firstFruit length
    if (firstFruit.length > secondFruit.length) {
        return firstFruit
    //This next step checks the opposite condition and will return the argument passed to secondFruit    
    } else if (firstFruit.length < secondFruit.length) {
        return secondFruit
    //Any other condition will be when the strings are the same lengths and will return a string with the message shown below
    } else {
        return "Strings are same length"
    }
}

//To invoke the function, the correct syntax is longerFruitName(fruit1, fruit2) etc...
//when using a variable, ensure data type is a string. If using actual fruit name strings (shown in example 3), ensure that data type is also a string.
//Input: fruit1, fruit2 ==> Output: "banana"
console.log(longerFruitName(fruit1, fruit2))
//Input: fruit3, fruit4 ==> Output: "cherry"
console.log(longerFruitName(fruit3, fruit4))
//Input: "starfruit", "durian" ==> Output: "starfruit"
console.log(longerFruitName("starfruit", "durian"))


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//This function will have 3 conditons to check. We start with the declaration. The parameter will be the temperature and the data type will be a number
const boilingPointCheck = (temperature) => {
    //The first condition we will check whether it is boiling. If the condition is met, it will return a string that says (given argument) + is at boiling point
    if (temperature === 212) {
        //Using template literals, we can embed the expression ${temperature} in the string. This is called string interpolation
        return `${temperature} is at boiling point`
    //The second condition will check if it is below boiling and return the string below boiling point.
    } else if (temperature < 212) {
        //Using same step as above
        return `${temperature} is below boiling point`
    //Any other condition should be above boiling point
    } else {
        return `${temperature} is above boiling point`
    }
}

const temp1 = 42
const temp2 = 350
const temp3 = 212

//Invoke the function and log using console.log
//Input temp1 ==> output: "42 is below boilint point"
console.log(boilingPointCheck(temp1))  
//Input temp2 ==> output: "350 is above boilint point"  
console.log(boilingPointCheck(temp2))
//Input temp3 ==> output: "212 is at boilint point"  
console.log(boilingPointCheck(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//Function parameters will be two arrays and will first concatenate the arrays. Then it will use .length to determine the length of the combined array.

//First declare the function (concatArray) with two parameters (array1, array2)
const concatArray = (array1, array2) => {
    //I will first store the combined array because .concat() is an accessor. Since the original array is unchanged we need to hold the new array until we can determine its length
    let comboArray = array1.concat(array2)
    //It will then return the comboArray length
    return comboArray.length
}

//Input will be the two arrays ==> Output: 10
console.log(concatArray(myNumbers1, myNumbers2))

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

//First declare the function (stringReverse)
const stringReverse = (string1) => {
    //Function will use split method to turn the string into an array. I use """ to split every character to its own array element. Since the split() method is an accessor, I have to assign it to a new variable.
    let stringArray = string1.split("")
    //The method reverse() is a mutator so the original array will be changed
    stringArray.reverse()
    //I declare a new variable (strRev) to store the output from the join() method because it is an accessor
    let strRev = stringArray.join("")
    return strRev
}

//Input is currentCohort which has a data type of string ==> Output: "2202 eilrahC"
console.log(stringReverse(currentCohort))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//The conditional statement we would need, would check the value of the given index for myArray and determine if it was either even or odd.
//The first condition would check to see if the given value at the given index was even. Every other value would be odd. I have commented out the code to show a loop implementation of the function created with the conditional statement.

// I know that (any number) % 2 that outputs 0, is an even number

//  if (myArray[i] % 2 === 0) {
//    console.log("even")
//  } else {
//     console.log("odd")
//  }


//Function will be used in a for loop to iterate each element of the array and use if else conditional statements to determine if odd or even. The function will then return a string "odd" or "even"

//First declare the function (oddOrEven) with a single parameter (array1)
//The function is declared outside of the for loop code block. The loop will pass the value of each index to the function. 
//We will declare arrayAtIndex with let so that it can be scoped locally in the code block of the for loop.

const oddOrEven = (arrayAtIndex) => {
    //This conditional statement checks if the array element at the given index is even and returns the string "even"
     if (arrayAtIndex % 2 === 0) {
         return "even"
     //All other conditions will yield an odd number and return the string "odd"
     } else {
         return "odd"
     }
 }
//Start at index 0 and iterate for the length of the array 1 step at at time.
//Input is the array stored in the constant myArray ==> Output will be odd, even, odd, even, odd, even
 for (let i = 0; i < myArray.length; i++) {

        let arrayAtIndex = myArray[i]
        //Every iteration arrayAtIndex will be overwritten and invoke the function
        console.log(oddOrEven(arrayAtIndex))
     }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//First the function will compare two parameters. 
//It will then return the outcome of the subtraction.

//I declare the function (bigSubSmall) with two paramaters (num1, num2)
const bigSubSmall = (num1, num2) => {
    //I compare the numbers using conditional statements. If num1 is larger than or equal to num2, it will return num1 subtracted by num2. I used >= because if both values are the same, order of subtraction would not matter.
    if (num1 >= num2) {
        return num1 - num2
    //All other conditions will be the reverse.
    } else {
        return num2 - num1
    }
}


// Set one:
const number1 = 58
const number2 = 100

//Input: number 1, number 2 ==> Output: 42
console.log(bigSubSmall(number1, number2))

// Set two:
const number3 = 27
const number4 = 24


//Input: number 3, number 4 ==> Output: 3
console.log(bigSubSmall(number3, number4))