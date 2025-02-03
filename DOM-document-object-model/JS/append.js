//where to add
const placesList = document.getElementById('places-list');
//where to be added
const li =document.createElement('li');
li.innerText = 'pahartoli bon';
//3. add the child
placesList.appendChild(li);



//1.where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'MY FOOD LIST';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='kacchi biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Chicken biriyani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salad & coke'
ul.appendChild(li3);
section.appendChild(h1);
section.appendChild(ul);
mainContainer.appendChild(section);


//set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Pant</li>
</ul>
`
mainContainer.appendChild(sectionDress);

