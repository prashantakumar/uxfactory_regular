//assignment 1
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
    if ((a + b) % 2 == 0) {  //if (((a + b) * (a + b)) % 2 == 0)
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
cal(2, 3);    */

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


//assignment 2

//1\\
// var number = [10, 20, 30, 70]
// var sum = 0;
// for (var i = 0; i < number.length; i++) {
//     sum = sum + number[i];
// }
// console.log(sum);

// var numbers = [1, 2, 3, 4]
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// var avg  = sum/numbers.length;
// console.log(avg);

//2\\
/*
var numbers = [2,3,1,0];
var squ=[];
squ = numbers.map(function(numbers){
    return ((numbers*2)+(numbers*2));
})
console.log(squ);     */

//3\\
/*
function cal(num){
    var i=1;
    while(i<=10){
        console.log(num,"*",i,"=",num*i);
         i++;
    }
}
cal(5);      

//4\\
function revers(str) {
    return str.split('').revers().join('')
};
console.log(revers("javascript"));    */

//5\\
/*
var number=([[1,2,3],[1,2,4]]);
function cal(a,b){
    
}
*/

// var number = [3, 4, 10, 17, 30, 41];
// number.push(12, 11);
// function cal(number) {
//     for (var i = 0; i <= number.length; i++) {
//         if (number[i] % 2 == 0) {
//             console.log('even number', number[i]);
//         }
//         //          else {
//         //            console.log('odd number', number[i]);
//         //          }
//     }
// }
// cal(number);

// var x = [3, 4, 10, 17, 30, 41];
// function evenarray(x) {
//     for (var i = 1; i <= x.lenght; i++) {
//         console.log(x[i]);
//         if (x[i] % 2 == 0) {
//            return 'even numbers array'
//         }
//         else {
//             return 'odd number'
//         }
//     }
// }
// console.log(evenarray(x));

// function evenNumArray(array) {
//     var arr = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             arr.push(array[i])
//         }
//     }
//     return arr;
// }
// console.log(evenNumArray([4,5,7,8,10,14]));

/*
function longestWord(string) {
    var strsplit = string.split(' ');
   // console.log(strsplit);
    var longestWord =' ';
    for (var i = 0; i < strsplit.lenght; i++) {
        if (strsplit[i].lenght > longestWord) {
            longestWord = split[i];
        }
    }
    return longestWord;
}
console.log(longestWord("The given value is a over jump wall"));  */

function dupv(array){
    var arr =[];
    for(i=0; i<array.lenght; i++){
        if(array[i]>arr){
            arr = array[i];
        }
    }
}
console.log(dupv([2,3,4,5,6,70,80]));






