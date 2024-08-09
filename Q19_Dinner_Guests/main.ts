/*Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */

let guestList: string[] = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];

// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }

let absentGuest: string = "Imran Khan";
let newGuest: string = "Kamran Tessori";
guestList[0] = newGuest;

// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }
// console.log(`Mr. ${absentGuest} is not coming to the party.`);
// console.log("\n\nGood News! We find Big Table So we are inviting 3 more guests.\n\n");

//Array main 3 Guest add kiye hain.
guestList.unshift("Sir Zia Khan")
guestList.splice(2, 0, "Farooq Sattar")
guestList.push("Bilawal Bhutto Zardari")

//Yahan pr me ne 6 Guest ki array ko print krawaya hai.
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `Dear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }

//Sorry Message to Guest for not inviting.
// console.log("Sorry se can't arrange big table. Only Two peoples will be invited.");

//Yahan pr me ne Guest remove kiye hain.
while(guestList.length > 2){
    let removeGuest = guestList.pop()
    // console.log(`\nSorry Mr. ${removeGuest}, You are not invited for Dinner.`);
}

//Humare Remaining 2 Guest jo invited hain.
// for (let i = 0; i < guestList.length; i++) {
//     console.log(
//       `Dear Mr. ${guestList[i]}, \n\nYou are still invited.\n\nThank you!\n\n`
//     );
//   }

//Me ne sare Guest array se remove krdiye.
guestList.splice(0, 2)
console.log(guestList);

//Exercise 19

//Print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${guestList.length}`);