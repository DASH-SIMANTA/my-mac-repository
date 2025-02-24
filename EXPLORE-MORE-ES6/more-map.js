const numbers = [12,43,234,24,2,44,99];

const doubled = numbers.map(num => num * 2);
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const half = numbers.map(num => num / 2);
// console.log(half);
const friends = ['khalekul sojib','sakib','nafis','babon','nasim'];

const lengths = friends.map(friend => friend.length);

// console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);