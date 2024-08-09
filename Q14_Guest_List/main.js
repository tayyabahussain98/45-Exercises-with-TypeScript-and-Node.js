/*Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you
invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
let guestList = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nDear Mr. ${guestList[i]}, \n\nIt's our pleasure to invite you in our party.\n\nThank you!\n\n`);
}
export {};
