/*Q27: Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate
color alien.*/

let alienColor: string = "Green";

//If the alien is green, print a message that the player earned 5 points.
//Version 1 of the program
if(alienColor === "Green"){
    console.log("Version 1: Player earned 5 points!!");
}
else if(alienColor === "Yellow"){
    console.log("Player earned 10 points!!");
}
else if(alienColor === "Red"){
    console.log("Player earned 15 points!!");
}
else{
    console.log("Please select right color");
}

//If the alien is yellow, print a message that the player earned 10 points.
//Version 2 of the program
alienColor = "Yellow";

if(alienColor === "Green"){
    console.log("Player earned 5 points!!");
}
else if(alienColor === "Yellow"){
    console.log("Version 2: Player earned 10 points!!");
}
else if(alienColor === "Red"){
    console.log("Player earned 15 points!!");
}
else{
    console.log("Please select right color");
}

//If the alien is red, print a message that the player earned 15 points.
//Version 3 of the program
alienColor = "Red";

if(alienColor === "Green"){
    console.log("Player earned 5 points!!");
}
else if(alienColor === "Yellow"){
    console.log("Player earned 10 points!!");
}
else if(alienColor === "Red"){
    console.log("Version 3: Player earned 15 points!!");
}
else{
    console.log("Please select right color");
}