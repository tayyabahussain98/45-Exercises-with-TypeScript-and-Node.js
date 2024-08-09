/*Q24: More Conditional Tests:You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False
result for each of the following:
• Tests for equality and inequality with strings.
• Tests using the lower case function.
• Numerical tests involving equality and inequality, greater than and less than, greater than
or equal to, and less than or equal to.
• Tests using "and" and "or" operators.
• Test whether an item is in a array.
• Test whether an item is not in a array.*/
//Equality & Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality & Inequality Test 2
console.log("Inequality test with strings: ", "Apple" === "Orange");
//Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("Equality test with numbers: ", 26 === 26);
//Numerical tests involving inequality
console.log("Inquality test with numbers: ", 26 === 35);
//Greater than test
console.log("Greater than test: ", 10 > 5);
//Less than
console.log("Less than test: ", 20 < 10);
//Greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//Less than or equal to
console.log("Less than and equal to test: ", 20 <= 5);
//Tests using "and" operators
console.log("And operator test: ", 5 === 5 && 10 < 5);
//Tests using "or" operators
console.log("Or operator test: ", 5 === 5 || false);
//Test whether an item is in a array
const fruits = ["Pineapple", "Banana", "Guava"];
console.log('Test "Pineapple" in the array: ', fruits.includes("Pineapple"));
//Test whether an item is not in a array
console.log('Test "Apple" is not in array: ', fruits.includes("Apple"));
export {};
