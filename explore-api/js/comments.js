// console.log('comments')

const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('error happened', error))
}

// await is used only when function is asnyc()
const loadComments2 = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.error('data load error')

    }
}