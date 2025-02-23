const max = Math.max(22,44,54,76,54,98);

const numbers = [3,44,332,244,288,554];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);

//use spread operation to copy

const nums = [4,5,67,6,22];
const nums2 = nums;
nums2.push(12);
// console.log(nums);

//refference dhore rakhe
const friends = [4,5,67,6,22];
const bondhu = friends;
// bondhu.push(12);

// console.log(bondhu);
// console.log(friends);

const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);


//advanced

const songkha = [...friends,999999];  //add extra element while copy
console.log(songkha);

