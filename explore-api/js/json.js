const user = {id: 1, name: 'Gorib amir', job: 'actor'};
//javaScript object notation(JSON)

const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);
 /* 
 output
  { id: 1, name: 'Gorib amir', job: 'actor' }   js
  {"id":1,"name":"Gorib amir","job":"actor"}    json
 */
const shop = {

    owner: 'Alia',
    address: {
        street:'kamal atatur road',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop','phone','cable','monitor', 'keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
};


console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

//{"owner":"Alia","address":{"street":"kamal atatur road","city":"ranbir","country":"BD"},"products":["laptop","phone","cable","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}



