/*Q13: Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several
examples.Use your list to print a series of statements about these
items, such as "I would like to own a Honda motorcycle." */

let transportation: string[] = ["Honda", "Civic", "Corolla", "Lamborghini", "Mercedes"]

for(let i = 0; i < transportation.length; i++){
    console.log(`${transportation[i]} is my favorite transport.`);
}