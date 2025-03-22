// console.log(1)
// console.log(2)
// // console.log(3)

// // doSomething();
// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))
// // setTimeout(doSomething,4000);

// setTimeout(() => {
//     console.log('lazy logged')
// },4000)


// console.log(4)
// console.log(5)
// console.log(6)

// function doSomething(){
//     console.log(3);
// }

/*
const myLoader = () => {

    return new Promise((resolve,reject) =>{
        const success = true;
        if(success){
            resolve(0.3)    
        }
        else{
            reject(0.7)
        }
    })

}
*/

const myLoader2 = () => {

    return new Promise((resolve,reject) =>{
        const success = Math.random;
        if(success <= 0.5){
            resolve(success)    
        }
        else{
            reject(success)
        }
    })

}


myLoader()
.then(data => console.log('resolve data',data))
.catch(err => console.log('rejected with value', err))

fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


async function loadData(){
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

loadData();

const taskLoader = async() => {
    const res = await fetch('');
}