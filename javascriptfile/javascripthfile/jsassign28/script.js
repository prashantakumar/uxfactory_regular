//assignment 1
//1) Write a function that takes time in hours format and return seconds.\\
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
//OR\\
// function cal(num){
//     return(hours * 3600);
// }
// console.log(cal(10));
//OR\\
// function calh(minutes){
//     return Math.floor(minutes * 3600);
//  }
//  var res = calh(10);
//  console.log(res); 

/*2) Using arithmetic operators ( +, -, *, /, and %), write a function that takes three parameters, num1,
num2, and an operator. Perform the relevant operation on num1 and num2. Try with switch
statement.
operate(10, 20, "-") ➞ -10
 10 - 20 = -10    */
/*
function type(operator)
{
    var result;
    var number1 = 10;
    var number2 = 20;
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
console.log(type('+'));  */
//var res = type('-');
//console.log(res);   

/*3) Create a function which returns true if given number is fully divided by 3. Return false otherwise.
divisibleByThree(9) ➞ true
divisibleByThree(13) ➞ false   */

// function cal(a) {
//     for (i = a; i <= a; i++) {
//         if (i % 3 == 0) {
//           console.log("true")
//         }
//         else {
//            console.log("false")
//         }
//     }
// }
// cal(13);
//OR\\
// var i=9;
// if(i%3==0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }  
//OR\\
// function cal(i) {
//     if (i % 3 == 0) {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }
// cal(13);

/*4) Given an object containing counts of both brids and animals, return total count, using a function.
getTotalCount({ birds: 6, animals: 0 }) ➞ 6
getTotalCount({ birds: 2, animals: 7 }) ➞ 9  */
// function animals(a,b){
//     ({birds:a,animals:b});
//     var total = a+b;
//     console.log(total);
// }
// animals(6,0); 

/*5) Create a function that takes a number x and returns the xth odd number.
nthOdd(1) ➞ 1
nthOdd(3) ➞ 5  */
// function prime(a)
// {
//     for(var i=1; i<=a; i++){
//         if(i%2!==0){
//             console.log(i);
//         }
//     }
// }
// prime(3);  

/*6) a simple program to determine whether you are eligible for voting. Note, people who are 18 and
older are only eligible.
checkEligibilityOfVoting(17) ➞ false
checkEligibilityOfVoting(19) ➞ true */

// var i = 17;
// if(i>=18){
//     console.log(true);
// }
// else  {
//     console.log(false);
// }  

/*7) Write a template string according to the following example:
const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS";
const statement = "your template string" ➞ "Tim knows JS which Tom doesn't that Tony knew
about"  */

/* 8) Given a string, return true if its length is even or false if the length is odd.
oddOrEven("javascript") ➞ true
oddOrEven("css") ➞ false   */


/*9) Create a function that takes a word and returns the new word without including the first
character.
newWord("uxfactory") ➞ "xfactory"      */

/*10) Write a function that takes a number and prints if its even. If its even, check if less than 10. If its
odd, return false */

// var i=12;
// if(i%2==0){
//     console.log("number is even");
//     if(i>10){
//         console.log("its not less then 10")
//     }
//     else{
//         console.log("number is less then 10");
//     }
// }
// else{
//     console.log("false");
// }      


/*11) Write a function taking two numbers, a,b. Return true if a is divided by b. Return false otherwise
checkNumber(2,3) ➞ false
checkNumber(21,3) ➞ true */

// function cal(a,b){
//     if(a%b==0){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// cal(21,3);   

/*12) Write a function taking two numbers, a,b. Return if (a+b) wholesquare is odd or even */

// function cal(a, b) {
//     if ((a + b) % 2 == 0) {  //OR\\ if (((a + b) * (a + b)) % 2 == 0)
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }
// }
// cal(1, 3);    

/*13) Write a palindrome fucntion*/
// function cal(str){
//    var rev = str                               
//    .split('').reverse().join('');

//    return str === rev;
// }
// console.log(cal('anna'));

// function palindrom(a) {
//     let last_digit, reversed = 0, number = a;
//     while (number != 0) {
//         last_digit = number % 10;
//         reversed = reversed = 10 + last_digit;
//         number = (number / 10);
//     }
//     return reversed == a;
// }
// console.log(palindrom(111));   

/*  14) Write a function that returns opposite of the number given
checkNumber(3) ➞ -3
checkNumber(-7) ➞ 7  */

// function reversed(num) {
//     let revnum = 0;
//     while (num > 0) {
//         revnum = revnum * 10 - num % 10;
//         num = Math.floor(num/10);
//     }
//     return revnum;
// }
// var obj = reversed(3);
// console.log(obj);       

/* 15) Program to find the biggest of three numbers
findBiggest (2,1,6) ➞ 6   */

// function maxNum(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//        console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// maxNum(10, 8, 21); 