/*Q21: Typescript Objects:They think of something you could store in a TypeScript Object. Write
a program that creates Objects containing these items.*/

//Write a program that creates Objects containing these items.

//Data type of person object
interface person {
    age: number,
    name: string,
    nationality: string,
    student: boolean,
}

//Person Object
let person: person = {
    age: 26,
    name: "Tayyaba",
    nationality: "Pakistan",
    student: true
}

//Print Person
console.log(person);

//Data type of car object
interface car {
    maker: string,
    color: string,
    automatic: boolean
}

//Car Object
let car: car = {
    maker: "Toyota",
    color: "Black",
    automatic: true
}

//Print Car
console.log(car);