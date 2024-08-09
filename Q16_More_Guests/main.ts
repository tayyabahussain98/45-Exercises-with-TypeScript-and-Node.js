/*Q16: More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let guestList: string[] = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];

// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
//   );
// }

let absentGuest: string = "Imran Khan";

let newGuest: string = "Kamran Tessori";

guestList[0] = newGuest;

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
  );
}

console.log(`Mr. ${absentGuest} is not coming to the party.`);

console.log(
  "\n\nGood News! We find Big Table So we are inviting 3 more guests.\n\n"
);

guestList.unshift("Sir Zia Khan");
guestList.splice(2, 0, "Farooq Sattar");
guestList.push("Bilawal Bhutto Zardari");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`
  );
}
