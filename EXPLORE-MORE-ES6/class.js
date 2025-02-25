const products =[
    {id: 1, name:'lenevo', price:65000},
    {id:2, name:'macbook', price:450000},
    {id:3, name:'lenevo', price:550000},
    {id:4, name:'dell', price:333999},
    {id:5, name:'hp', price:200000}
]

class Product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)

    }
}
// const lenevo2 = new product('le le lenevo')
const lenevo = new Product('llalalala');
// console.log(lenevo);
// lenevo.speak (`ki bolo`);


class Teacher{

    constructor(name,subject){
        this.name = name;
        this.subject = subject;

    }
    lecture(){
        console.log('Sir is teaching JavaScript');
    }
}

const Tapan = new Teacher('tapan sir','IT');

console.log(Tapan);

const Riyan = new Teacher('Riyan Sir', 'Algorithm');

console.log(Riyan);