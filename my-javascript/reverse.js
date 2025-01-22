const sentence = 'I am learning web dev.';
//const result ='.ved bew gninrael ma I';
//web
//bew
//donal
//d
//od
//nod
//anod
//lanod
let reverse ='';

for(const letter of sentence){
    // console.log(letter);
    reverse= letter+ reverse;

}
console.log(reverse);

//another solution//ignore
let rev='';
for(let i=0; i <sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);
//shortcut

const reversed = sentence.split('').reverse().join('');
console.log(reversed);


