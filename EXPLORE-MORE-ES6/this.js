class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const tanvir = new Person('Tanvir',23);
console.log(tanvir);
tanvir.sleep();
const badam = new Person('kacha badam',23)
badam.sleep();

//vajal

const lazy = tanvir.sleep;
lezy();