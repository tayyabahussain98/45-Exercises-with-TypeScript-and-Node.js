/*Q29: Favorite Fruit:Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like
bananas! */
let favFruits = ["Banana", "Mango", "Guava"];
if (favFruits.includes("Banana")) {
    console.log("I really like Banana!");
}
else {
    console.log("Not in Array!!!");
}
if (favFruits.includes("Mango")) {
    console.log("I really like Mango!");
}
else {
    console.log("Not in Array!!!");
}
if (favFruits.includes("Guava")) {
    console.log("I really like Guava!");
}
else {
    console.log("Not in Array!!!");
}
if (favFruits.includes("Orange")) {
    console.log("I really like Orange!");
}
else {
    console.log("Not in Array!!!");
}
if (favFruits.includes("Apple")) {
    console.log("I really like Apple!");
}
else {
    console.log("Not in Array!!!");
}
export {};
