const person = {
    name: 'Sakib hossain',
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}

const prop = 'job';
console.log(person.name);
console.log(person['job']);
//variable prop
console.log(person[prop]);
console.log(person['3']);
console.log(person['add-dress']);
console.log(person["add-dress"]);
