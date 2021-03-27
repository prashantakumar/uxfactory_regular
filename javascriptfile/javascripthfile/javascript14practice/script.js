/*function dosearch() {
    var war = document.getElementById('box'). value;
    console.log("the given number,text is: ", war)
}*/

/*var age = 18;
if (age > 20)
{
    console.log("not eligible")
}
else if (age < 20)
{
    console.log("eligible")
}*/

/*var dog = {
    legs : 4,
};
var snake = {
    legs : 0,
};
if (dog.legs < 0)
{
    console.log("that is dog")
}
else
{
    console.log("that is snake")
}*/

/*var dog = {
    legs : 4,
};
var snake = {
    legs : 0,
};
if (dog.legs < 0)
{
    console.log("dog walk")
}
else
{
    console.log("dog not walk")
}
if (snake.legs == 0)
{
    console.log("snake walk")
}
else {
    console.log("snake not walk")
}*/

/*var arrays = [10, 20, 30, 40, 50, "numb"];
console.log("array:", arrays);
console.log("array length:", arrays.length);
console.log("array Elements:", arrays[0], arrays[1], arrays[2], arrays[3],);
console.log("array last element:",  arrays[arrays.length - 1]);

arrays.push(1000);
console.log('array push', arrays);//[10, 20, 30, 40, 50, "numb", 1000]

arrays.pop();
console.log('array pop:', arrays);//[10, 20, 30, 40, 50, "numb"]

arrays.shift();
console.log('array shift:', arrays); //[20, 30, 40, 50, "numb"]

arrays.unshift(90);
console.log('array unshift:', arrays);//[90, 20, 30, 40, 50, "numb"]

arrays.sort();
console.log('array sort:', arrays);//[20, 30, 40, 50, 90, "numb"]

arrays.join();
console.log('array join:', arrays);//[20, 30, 40, 50, 90, "numb"]

var month = ['jan','march', 'apri'];
month.splice(1, 0, 'feb');
console.log(month); //["jan", "feb", "march", "apri"]

var month = ['jan','march', 'apri'];
month.splice(1, 1, 'feb');
console.log(month); //["jan", "feb", "apri"]

var month = ['jan','feb', 'march', 'apri'];
month.reverse();
console.log(month); //["apri", "march", "feb", "jan"]

var month1 = ['jan','march', 'apri'];
var month2 = [1,2,3];
console.log(month1.concat(month2)); //["jan", "march", "apri", 1, 2, 3]

var save = ['soma', 'mangala', 'budha', 'gura', 'shukra',];
console.log(save.copyWithin(0, 4));  //["shukra", "mangala", "budha", "gura", "shukra"]0: "shukra"1: "mangala"2: "budha"3: "gura"4: "shukra"length: 5__proto__: Array(0)

var save = ['soma', 'mangala', 'budha', 'gura', 'shukra',];
console.log(save.copyWithin(1, 4));  //["soma", "shukra", "budha", "gura", "shukra"]

save.splice(1, 0, 'mangala');//extra one add splice//
console.log(save);   //["soma", "mangala", "shukra", "budha", "gura", "shukra"]

//fill//
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.fill(0, 5));
//Ans=1,2,3,4,5,0,0,0,0,0//

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.fill(9, 0));
//Ans=9, 9, 9, 9, 9, 9, 9, 9, 9, 9//

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.fill(4, 2));
//Ans=1, 2, 4, 4, 4, 4, 4, 4, 4, 4//  *\

//strings//
/*var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>

var str = "my name is this is";
console.log(str.indexOf("is"));// in this (indexof) it shows the which place is there it shows(8)//

var cars = ['kia', 'TATA', 'BMW', 'BENZ'];
var strings = cars.join('*');
console.log(strings);
//"kia"*"TATA"*"BMW"*"BENZ"//

var bakery = ["puff", "cakes", "dill pasand", "Veg puff"];
bakery.splice(2, 2, "coll cakes", "Egg puff");
console.log(bakery);

var bakery = ["puff", "cakes", "dill pasand", "Veg puff"];
bakery.splice(2, 0, "coll cakes", "Egg puff");
console.log(bakery);

var number = [10, 20, 30, 40, 50];
var somenumber = number.slice(1, -1);
console.log(somenumber);
console.log(number);

/*i < arr.length
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 130, 150];

for (var i = 0; i < arr.length; i++) {
    console.log("index", i);
  if(arr[i] < 70)
  {
      console.log(arr[i], "is less then 70");
  }
  else {
      console.log(arr[i], "greater then 70");
  }
}*/
/*  Ans=
index 0
script.js:148 10 "is less then 70"
script.js:145 index 1
script.js:148 20 "is less then 70"
script.js:145 index 2
script.js:148 30 "is less then 70"
script.js:145 index 3
script.js:148 40 "is less then 70"
script.js:145 index 4
script.js:148 50 "is less then 70"
script.js:145 index 5
script.js:148 60 "is less then 70"
script.js:145 index 6
script.js:151 70 "greater then 70"
script.js:145 index 7
script.js:151 80 "greater then 70"
script.js:145 index 8
script.js:151 90 "greater then 70"
script.js:145 index 9
script.js:151 130 "greater then 70"
script.js:145 index 10      */



/*i <= 4
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 130, 150];

for (var i = 0; i <= 4; i++) {
    console.log("index", i);
  if(arr[i] < 70)
  {
      console.log(arr[i], "is less then or equal to 4");
  }
  else {
      console.log(arr[i], "greater then");
  }
}*/

/*index 0
script.js:148 10 "is less then or equal to 4"
script.js:145 index 1
script.js:148 20 "is less then or equal to 4"
script.js:145 index 2
script.js:148 30 "is less then or equal to 4"
script.js:145 index 3
script.js:148 40 "is less then or equal to 4"
script.js:145 index 4
script.js:148 50 "is less then or equal to 4"  */



/*var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 130, 150];

for (var i = 10; i > 4; i--) {
    console.log("index", i);
  if(arr[i] < 70)
  {
      console.log(arr[i], "is less then 4");
  }
  else {
      console.log(arr[i], "greater then 4");
  }
}

//out put//
index 10
script.js:213 130 "greater then 4"
script.js:207 index 9
script.js:213 100 "greater then 4"
script.js:207 index 8
script.js:213 90 "greater then 4"
script.js:207 index 7
script.js:213 80 "greater then 4"
script.js:207 index 6
script.js:213 70 "greater then 4"
script.js:207 index 5
script.js:210 60 "is less then 4"
*/


/*var expr = "javascript";

switch (expr) {
    case "C":
        console.log("pragramming language.");
        break;
    case "python":
    case "javascript":
        console.log("scripting languages.");
        break;
    default:
        confirm.log(`Doesnt match ${expr}.`);
}
//Ans= scripting languages.//  */

/*
var expr = "C";

switch (expr) {
    case "C":
        console.log("pragramming language.");
        break;
    case "python":
    case "javascript":
        console.log("scripting languages.");
        break;
    default:
        confirm.log(`Doesnt match ${expr}.`);
}
//Ans= programming language. // */



/*var expr = "Ansys";

switch (expr) {
    case "C":
        console.log("pragramming language.");
        break;
    case "python":
    case "javascript":
        console.log("scripting languages.");
        break;
    default:
        console.log(`Doesnt match ${expr}.`);
}
//Ans= Doesnt match Ansys//   */

//for loop\\
/*for (var x=2; x<=10; x+=2)
{
    console.log(x);
}*/

//while loop \\
/*
function cal(num) {
    i = 1;
    while (i <= 10) {
        console.log(num, "*", i, "=", num * i);
        i = i * 1;
    }
}
cal(5);      

var x=1;
while(x<10)
{
    console.log(x);
    x=x+1
}      */

/*var arr = [10, 20, 30, 40, 50];
var sum = 0;

for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum)

//Ans = 150//      */

/*    //While loop
var n1 = 0;
var n2 = 0;
while (n1 < 3)
{
    n1++;
    //n1: 1 2 3
    console.log("this is a value of n1", n1);
    (n2 += n1);
    //n2: 1 3 6
    console.log("this is the value of n2", n2);

}*/
/*
let num = 0;
let i = 1;
while (i <= 10)
{
  i++;
  Number += i;
}
console.log(num);

var cars = ["bmw", "volvo", "audi"];
cars.push("merceds");
for(var i=0; i<4; i++)
{
    console.log(cars);
}

var i,j;

for(i=1;i<=10;i++)
{
    for(j=1;j<=i;j++)
    {
        console.log("*");
    }
    console.log("<br/>");
}

var a=4;
for(var i=4; i>=0; i++)
{
    var str="";
    for(var j=1; j<=i; j++)
    {
        str=str+j;
    }
    console.log(str);
}

var a=4;
for(var i=1; i<=a; i++)
{
    for(var j=1; j<=i; j++)
    console.log(i);
}*/

/*var a=4;
for(var i=1; i<=a; i++)
{
    var str=""
    for(var j=1; j<=i; j++)
    {
        str=str+j;  //str+=j;
    }

    console.log(str);
}*/

/*
//CLASS IN JAVASCRIPT
class anything {
    constructor(a,b, name){
        this.a = a;
        this.b = b;
        this.name = name;
    }
   // static method
   static printparameters(a,b){
       return (`the parameters are ${a} & ${b}`);
   }
   getsum(){
       return this.a + this.b;
   }
   getsub(){
       return this.a - this.b;
   }
}
const obj = new anything (4, 5, "sum")
console.log(anything.printparameters(3, 7));  //Ans = the parameters are 3 & 7
console.log(`the sum is:${obj.getsum()}`);  //Ans = the sum is:9
console.log(`the sum is:${obj.getsub()}`);  //Ans = the sum is:-1  */


//object literals
//Initializing
/*function getlaptop1(make, model, year){
    return{
        make: make,           //  make,
        model: model,         //  model,
        year: year            //  year      (O/P: {make:"Apple", "MacBook", "2015"})
    }
}
let laptopObj = getlaptop1("Apple", "MacBook", "2015",);
console.log(laptopObj);*/

/*function getlaptop(make, model, year){
    return{
        saymodel(){
            return model;
        },
    };
}
console.log(getlaptop("Apple", "MacBook", "2015").saymodel());//Ans= MacBook
console.log(getlaptop("MacBook", "Apple", "2015").saymodel());//Ans= Apple */

/*function getlaptop1(make, model, year){
    return{
        make,          //  make,
        model,         //  model,
        year           //  year      (O/P: {make:"Apple", "MacBook", "2015"})
    }
}
let laptopObj = getlaptop1("Apple", "MacBook", "2015",);
console.log(laptopObj.model,laptopObj['model']);
let laptopObj1 = getlaptop1("HP", "ChromeBook", "2020");//Ans= MacBook MacBook*/

//let laptopObject = {
//    make:'Apple',
//    model:'Macbook',
//    year:'2015',
//    saymodel: function(){
//      return model;
//    }
// };
//console.log(grtLaptop("Apple", "MacBook", "2015").saymodel());

/*var prop = "make";
var i = 0;
const laptop ={
    [prop + ++i]: "Apple",
    [prop + ++i]: "Dell",
    [prop + ++i]: "HP",
};
console.log(laptop);  //Ans= {make1: "Apple", make2: "Dell", make3: "HP"}    */

/*function getlaptop(make, model, year){
    return{
        saymodel(){
            return `model name:${model}`;
        },
        sayyear(){
            return `year name:${year}`;
        },

    };
}
let lap = getlaptop("Apple", "MacBook", "2015");
console.log(lap.saymodel());       //model name:MacBook
console.log(lap.sayyear());      //year name:2015   */

//Destructuring 
////////let person = {pname: "Raj", country:"America", job: "Developer", empId: "40"}
/*
let pname = person.pname;
let country = person.country;
let job = person.job;
console.log(pname, country, job);  //Ans = Raj America Developer  */

/*
let { country } = person;
console.log(country);  //Ans= America */

/*
let { pname, country, job } = person;
console.log(pname, country, job);  //Ans = Raj America Developer  */

/*
//HERE JEST CHANGING THE NAMES
let {pname: nm, country, job:foo, empId: id} = person;
console.log(nm, country, foo, id);     //Ans = Raj America Developer 40  */

/*
function multiply(a, b =1){
    return a*b;
}
console.log(multiply(4, 9));  //Ans= 36
console.log(multiply(8));     //Ans= 8  */

/*
const toolarry = ['hammer', 'saw'];
const toolarry2 = ['sawrad'];

const tools = [...toolarry, ...toolarry2];
console.log(tools);   // Ans = ["hammer", "saw", "sawrad"]   */

/*
class anything {
    constructor(a,b, name){
        this.a = a;
        this.b = b;
        this.name = name;
    }
   // static method
   static printparameters(a,b){
       return (`the parameters are ${a} & ${b}`);
   }
   getsum(){
       return this.a + this.b;
   }
   getsub(){
       return this.a - this.b;
   }
   getarryreduce(...arr){
       return arr.map(item => item.reduce((a, b)=> a + b));  //if it is a * b (ans= 120, 120)
   }
   getmax(arr){
       return Math.max(...arr);
   }
}
const obj = new anything (4, 5, "sum")
//console.log(anything.printparameters(3, 7));  //Ans = the parameters are 3 & 7
//console.log(`the sum is:${obj.getsum()}`);  //Ans = the sum is:9
//console.log(`the sum is:${obj.getsub()}`);  //Ans = the sum is:-1
console.log(obj.getarryreduce([1,2,3,4,5],[2,3,4,5]));  //Ans=[15, 14]
console.log(obj.getmax([20,51,8,10,11]));               //Ans=51   */





































































































