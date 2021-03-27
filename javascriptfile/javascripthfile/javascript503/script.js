/*function any{
  return null
}
console.log(any)

function someName(){

    return null;
}
someName(); */

/*function someName(a, b) {
    var total = a + b;
    consol.log(total)
}
someName(4, 8);*/

/*function someName(a, b) {
    var x = a.indexof(b);
    console.log(x);
    if (a < 0 || b >= 0) {
        return true;
    }
    else {
        return false;
    }
}
var obj = someName('my name is rahul', 'name');
consol.log(obj);*/

/*function returnString(des, name) {
    if(des.includes(name)){
        return true;
    }
    else {
        return false;
    }
}
console.log(returnString('java script','java')); */

/*ASSIGNMENT
//print even number
for(var i=2; i<=5; i=i+2)
{
    console.log(i);
}      //Ans = 2, 4 */

//structure
/*var a=3;
for (var i=1; i<=a; i++)
{
    var str=""
    for (var j=1; j<=i; j++)
    {
        str=str+j;
    }
    console.log(str);
}  */

//string "9"
/*var svalue = "6";
switch (svalue) {
    case "9":
        console.log("string9");
        break;
    default:
        console.log("string");
}

//swap two numbers
let a=5,b=6;
[a,b]=[b,a];
console.log('a value is:', a, 'b value is:',b);

var arr = [1,2,2,3,4,2];
var n = 2; count = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i] == n){
        count++;
    }
}
console.log(`${n} is repeated ${count} times`);  */
/*
var fruits = {
    type: "A",
    name: "bananna,apple,pineapple",
};
var fruits2 = {
    type: "B",
    name: "custeredapple,guava,lemon",
};
var fruits3 = {
    type: "C",
    name: "apricot,blackberry,coconut",
};

var fruits = 4;
switch (fruits) {
    case 1:
        console.log("bananna,apple,pineapple");
        break;
    case 2:
        console.log("custeredapple,guava,lemon");
        break;
    case 3:
        console.log("apricot,blackberry,coconut");
        break;
    default:
        console.log("not a fruits");
}   */

/* function fruittype(type) {
    switch (type) {
        case 'A':
            return fruits1.name;
            break;
        case 'B':
            return fruits2.name;
            break;
        case 'C':
            return fruits3.name;
            break;
        default:
            return "not availabe";
    }

}
console.log(fruittype("B"));  */
//var userName;
//consol.log(userName);
//consol.log("userName");

/*var numbers = [1,2,3,4,5]
var sum = 0;
numbers.forEach(function(numbers){

})

for(var i=2; i<=10; i=i-2)
{
    console.log(i);
    console.log("dvhsdui");
}  */


/* function avg(a,b){

    var total = a+b;
    console.log(total)
}
avg(1,2);

function maxNum(a,b,c){
    max = a > b ? ( a > c ? a : c) : (b > c ? b : c) ;
    return max;
}
console.log(maxNum(10,8,21));

function number(a){
    for(i=10; i>=a; i--){
        console.log(i);
    }
}
var num = number(5);  */

//by given number upto only even number\\
/*var pvalue=5;
count=0;
function prime(pvalue)
{
    for(var i=1; i<=pvalue; i++){
        if(i%2!==0){
            console.log(i);
            count++;
        }
    }
}
prime(pvalue);

var pvalue=9;
count=0;
function prime(pvalue)
{
    for(var i=1; i<pvalue; i++){  //i<=pvalue  ANS=6 //i<pvalue ANS=5 \\
        if(i%2!==0){

        }
    }
    console.log(i);
}
prime(pvalue);  */

/*var pvalue=5;
count=0;
function prime(pvalue)
{
  var i=1;
  while(i<pvalue){
      if(i%2!==0){
          console.log(i);
          i++;
      }
  }

}
prime(pvalue);     */
//1\\
/*
function cal(a){
    for (var i=0; i<=a; i++){
        if(i=i*60*60){
            console.log(i);
        }
    }
}
cal(10);
let result;  */

//const operator  = arm('+');
//const number1 = parseFloat(arm(2));
//const number2 = parseFloat(arm(2)); 

//switch case 2 \\
/*
function type(operator)
{
    var result;
    var number1 = 10;
    var number2 = 2;
    switch (operator) {
        case '+':
            result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;
        case "-":
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;
        case '*':
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
        // case '/':
        //  result = number1/number2;
        //     console.log(num1/num2);
        //     break;
        case '/':
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;
        default:
            console.log("no result");
    }
}
//console.log(type('*'));
var res = type('*');
console.log(res);   */

// 1 \\ 
/*
function calh(minutes){
   return Math.floor(minutes * 60);
}
var res = calh(1);
console.log(res);   */

// function cal(a){
//     for(i=0 ; i<=a; ){
//         if(i%3==0){
//             return true;         
//         } 
//         else {
//             return false;
//         }    
//     }
// }
// console.log(cal(9));

//3\\

// var i=13;
// if(i%3==0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }  

// function cal(i) {
//     if (i % 3 == 0) {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }
// console.log(cal(13));

//4\\
/*
function prime(a)
{
    for(var i=1; i<=a; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
prime(3);

function animals(){
   var a =  ({birds:6,animal:0})
   var b = ({birds:2,animal:7})
   console.log()

}   */

//6\\
/*var i = 15;
if(i>=18){
    console.log(true);
}
else  {
    console.log(false);
}  */

//4\\
/*
function animals(a,b){
    ({birds:a,animals:b});
    var total = a+b;
    console.log(total);
}
animals(2,7);   */

// function somename(a,b) {
//    var x = a.indexof(b);
//    console.log(x);
//    if(a.indexof(a)){
//        return even;
//    }
//     else {
//         return odd;
//     }
// }
// var obj = somename('my name javascript css','css');
// console.log(obj);

//10\\
/*
var i=12;
if(i%2==0){
    console.log("number is even");
    if(i>10){
        console.log("its not less then 10")
    }
    else{
        console.log("number is less then 10");
    }
}
else{
    console.log("false");
}      */


//11\\
/*
function cal(a,b){
    if(a%b==0){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
cal(21,3);   */

//12\\
/*
function cal(a, b) {
    if (((a + b) * (a + b)) % 2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
cal(2, 2);    */

//13\\
/*
function palindrom(a) {
    let last_digit, reversed = 0, number = a;
    while (number != 0) {
        last_digit = number % 10;
        reversed = reversed = 10 + last_digit;
        number = (number / 10);
    }
    return reversed == a;
}
console.log(palindrom(-123));   */

//revers number\\
/*
function reversed(num) {
    let revnum = 0;
    while (num > 0) {
        revnum = revnum * 10 - num % 10;
        num = Math.floor(num/10);
    }
    return revnum;
}
var obj = reversed(7);
console.log(obj);       */

/*
function cal(a, b) {
    if (((a + b) * (a + b)) % 2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
cal(2, 2);    */

/*
function maxNum(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
       console.log(b);
    }
    else{
        console.log(c);
    }
}
maxNum(10, 8, 21);  */

var numbers = [10, 20, 30, 70]
var sum = 0;
numbers.forEach(function (numbers) {
    sum = sum + numbers;
});
console.log(sum);













































