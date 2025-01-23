const persons=['rakib','nokib', 'sakib', 'akib','dakib'];
const sortPersons=persons.sort();
console.log(sortPersons);
/* sort>>>
 Ascending>>smaller to lager
 descending>>larger to smaller
 */

const numbers= [4,7,12,43,6,1];
// const number_asc = numbers.sort();//not working
const number_asc=[...numbers].sort(function(a,b) {return a-b});
const number_dsc=[...numbers].sort(function(a,b) {return b-a});
console.log(number_asc);