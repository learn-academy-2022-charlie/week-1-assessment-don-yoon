// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
// console.log(colors)

// a) Your answer:

// In class I said that the answer would be, the array is unchanged. Since const keeps the variable from being changed and because .push is a mutator, I thought that nothing would happen.

// b) Verify and explain:

// The answer is 5. The output of .push() is actually the length of the array after adding "indigo" to the end of the array. If I check console.log(colors) after the .push the colors array now has indigo attached to the end of the array. After some online research, the wording specifically said that const will prevent reassignment of the variable colors, however it does not prevent me from manipulating the data inside.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer:

// The output would be 10. The .length method gives us the length of the string. Spaces count as characters

// b) Verify and explain:

// The console log outputs 10. When .length is used on strings, it counts every character and when used on arrays, it counts each indiviual element.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:

//The output would be "o". The greetings[4] is referring to the 4th index of the string "Hello World!". Since index starts at 0, the 4th index would give the value at the 5th spot in the string "Hello World!"

// b) Verify and explain:

// The log outputs "o", As I have mentioned above the [] notation refers to the value of the string at the given index.



// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:

// "Ruby". The square bracket notation denotes the value at which index the log will output. Since the variable index is 1, it would output the second value in the array languages which is "Ruby".

// b) Verify and explain:

// The output was the string "Ruby". The index notation works similarly with both strings and arrays. We would need to be careful because for the array, each index refers to an element in the array, and not a specific character as seen in a string.



// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:

// I am not familiar what the console would log, however .toUpperCase() is a string method. Since weekendDays is a variable containing an array, I assume it would not work as intended.

// b) Verify and explain:

//The console outputed an error as shown below
            //TypeError: weekendDays.toUpperCase is not a function
            // at Object.<anonymous> (/Users/learnacademy/Desktop/Assessments/week-1-assessment-don-yoon/coding-concepts.js:52:25)
            // at Module._compile (node:internal/modules/cjs/loader:1099:14)
            // at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
            // at Module.load (node:internal/modules/cjs/loader:975:32)
            // at Function.Module._load (node:internal/modules/cjs/loader:822:12)
            // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
            // at node:internal/main/run_main_module:17:47

            // Node.js v17.8.0
//The log gave a TypeError. Online sources say that this type of error occurs when applying a string method to a value that is not a string.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// The console will log what data type the .length method will output which is a number.
// b) Verify and explain:
// The log shows "number". dataTypes.length will output the number 3. When typeof is used on 3, it will output what the data type is.
