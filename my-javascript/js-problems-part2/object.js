const student = {
    name:'sakib',
    id: 121,
    address:'movie cinema',
    isSingle:true,
    friends:['Apu','Reza','Salman','aamir'],
    movie: [{name:'no.1', year:2025},{name:'king khan',year:2018}],
    act: function(){
        console.log('acting like a developer');
    },
    car:{
        brand:'tesla',
        price:5000000,
        made:2025
    }

}

// console.log(student);
// console.log(student.car);
console.log(student.act);
student.act();
// console.log(student.act);
// console.log(student.address);
// console.log(student.movie);
