/*Q12: Greetings: Start with the array you used in Exercise 11, but
instead of just putting each person's name, print a message of them.The
text of each message should be the same, but each message should be
personalized with the person's name.*/


let friendsName = ["Tayyaba", "Najma", "Uzma", "Kainat", "Nida", "Hira", "Misbah"]

// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[0]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[1]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[2]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[3]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[4]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[5]}"`)
// console.log(`Hello! Wish you to Eid Mubarak "${friendsName[6]}"`)

for(let i = 0; i < friendsName.length; i++){
    console.log(`Hello! Wish you to Eid Mubarak "${friendsName[i]}"`)
}