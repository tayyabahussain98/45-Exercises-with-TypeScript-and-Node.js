/*Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that
you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know
you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re
still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program. */
let guestList = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }
let absentGuest = "Imran Khan";
let newGuest = "Kamran Tessori";
guestList[0] = newGuest;
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }
console.log(`\nMr. ${absentGuest} is not coming to the party.`);
console.log("\n\nGood News! We find Big Table So we are inviting 3 more guests.\n\n");
//Array main 3 Guest add kiye hain.
guestList.unshift("Sir Zia Khan");
guestList.splice(2, 0, "Farooq Sattar");
guestList.push("Bilawal Bhutto Zardari");
//Yahan pr me ne 6 Guest ki array ko print krawaya hai.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`);
}
//Sorry Message to Guest for not inviting.
console.log("Sorry se can't arrange big table. Only Two peoples will be invited.");
//Yahan pr me ne Guest remove kiye hain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`\nSorry Mr. ${removeGuest}, You are not invited for Dinner.`);
}
//Humare Remaining 2 Guest jo invited hain.
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nDear Mr. ${guestList[i]}, \n\nYou are still invited.\n\nThank you!\n\n`);
}
//Me ne sare Guest array se remove krdiye.
guestList.splice(0, 2);
console.log(guestList);
export {};
