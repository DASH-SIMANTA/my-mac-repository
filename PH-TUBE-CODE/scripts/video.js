// console.log('script added');

//1. Fetch, Load and Show Categories on html

//create loadCategories
const loadCategories = () =>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res =>res.json())
    .then(data =>DisplayCategories(data.categories))
    .catch(error=> console.log(error))

}

//Create DisplayCategories

// {category_id: "1001", category: "Music"}

const DisplayCategories = (categories) =>{
    const categoryContainer = document.getElementById('categories');

    // console.log(data)
    categories.forEach((item)=>{
        console.log(item);
        //create a button
        const button =document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        //add button to category container
        categoryContainer.append(button);

    })
};


loadCategories();
// DisplayCategories();