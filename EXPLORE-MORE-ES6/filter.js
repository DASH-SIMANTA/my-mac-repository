//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 43, 23];

const players = [75,65,77,99,22];
// const selected = players.filter(p => p > 60);
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);


const selected =players.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['dipta','dip','rajesh','alamin','refat'];
const oddFriends = friends.filter(friend => friend.length > 4)

console.log(oddFriends)