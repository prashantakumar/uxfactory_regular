/*Array Helper Method
1. forEach
2. map
3. filter
4. find
5. every
6. some 
7. reduce */

//forEach  ES6
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function(numbers){
   sum = sum + numbers; // sum += numbers;
});
console.log(sum); //Ans = 15 

// MAP ES6
var numbers = [1,2,3,4,5];
var squares = [];
squares = numbers.map(function(number){
   return number*number
});
console.log(squares); //Ans = 1 4 9 16 25 

// filter ES6
var numbers = [5,10,15,20,25];
var final = [];
final = numbers.filter(function(number){
   return number>=15 
});
console.log(final); //Ans = 15, 20, 25 

//find    ES6
var users = [
    {name:'Deve', age:'20'},
    {name:'Jhon', age:'10'},
    {name:'tiger', age:'22'}
]
var foundUser;

foundUser = users.find(function(user) {
    return user.age === '10';
})
console.log(foundUser); //Ans = {name:'Jhon', age:'10'}

// every and some   ES6  
var users = [
    {name:'Deve', age:'20'},
    {name:'tiger', age:'10'},   //which one is the first element that is print 
    {name:'Jhon', age:'10'},
    {name:'tiger', age:'22'}
]
isAllUsersAboveTwenty = users.every(function(user){
    return user.age > 20
})

someUserAboveTwenty = users.some(function(user){
    return user.age >20
    //return user.name =="Deve"; user.age < 11
})

console.log(isAllUsersAboveTwenty);      // false
console.log(someUserAboveTwenty);        // true

// reduce ES6
var numbers =[1,2,3,4,5];
var sum = 0;

sum = numbers.reduce(function(sum, number){  // in this reduce method the itarater function takes 2 arguments (sum, number)
    return sum + number;
}, 0);

console.log(sum);


//filter:(method)
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(filteredItems)

//Map:(method)
const itemNames = items.map((item) => {
    return item.name 
})
console.log(itemNames)

//find:(method)
const founditem = items.find((item) => {
    return item.name ==='Book'
})
console.log(founditem)

//forEach:(method) 
items.forEach((item)=>{
    console.log(item)
})

//forEach:(method)
items.forEach((item)=>{
    console.log(item.price)
})

//forEach:(method)
items.forEach((item)=>{
    console.log(item.name)
})

//some:(method)
const hasInexpensiveItems = items.some((item) => {
    return item.price <=0
})
console.log(hasInexpensiveItems)  //false

const InexpensiveItems = items.some((item) => {
    return item.price <=10
})
console.log(InexpensiveItems) //true

//every:(method)
const expensiveItems = items.every((item) => {
    return item.price <=1000
})
console.log(expensiveItems)   //true

const pensiveItems = items.every((item) => {
    return item.price >= 5
})
console.log(pensiveItems) //true

const ensiveItems = items.every((item) => {
    return item.price >= 500
})
console.log(ensiveItems)   // false

//Reduce:(method)
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)
console.log(total) //1840

//include: (method)
const products = [1, 2, 3, 4, 5]
const includesTwo = products .includes(4)
console.log(includesTwo)  //true

const roducts = [1, 2, 3, 4, 5]
const includes = roducts .includes(7)
console.log(includes)  //false     

