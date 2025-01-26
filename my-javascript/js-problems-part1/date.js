const today =new Date();
const date =new Date('2062-10-09');
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());

const specificDate =new Date(2091,0,26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleDateString('en-GB'));
