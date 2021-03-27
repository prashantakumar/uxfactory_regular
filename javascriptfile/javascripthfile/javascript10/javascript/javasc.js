//arithmetic operator and campound operator//
var a = 100;
var b = 200;
var sum = a + b;
console.log(sum);
var c = 100;
sum +=c;
console.log(sum)

var a = 100;
var b = 200;
var sum = a - b;
console.log(sum);
var c = 100;
sum -=c;
console.log(sum)

var a = 100;
var b = 200;
var sum = a * b;
console.log(sum);
var c = 100;
sum *=c;
console.log(sum);

var a = 100;
var b = 200;
var sum = a / b;
console.log(sum);
var c = 100;
sum /=c;
console.log(sum)

//logical operators//
//&& operator both are true it is ture//
var a = 10;
var b = 20;
console.log(a<20 && b>10)

var a = 10;
var b = 20;
console.log(a<20 && b>30)

//|| OR operator any one is true its shows true //
var a = 10;
var b = 20;
console.log(a<20 || b>30)

//! operator here a=10 b=10 both are equal means candition false//
var a = 10;
var b = 10;
console.log(a!=b)

//! a=10 b=20 not equal then condition true//
var a = 10;
var b = 20;
console.log(a!=b)

//string operator //
var x = "firststring"
var y = "secondstring"
console.log(x+" "+y)

//condition operator (condition, ?(if), :(else), )//
var x = 10;
var y = 20;
console.log((x<20 && y>10)? "hello" : "Does not satisfy")

var x = 10;
var y = 20;
console.log((x<20 && y>20)? "hello" : "Does not satisfy")

var x = 10;
var y = 20;
console.log((x<20 && y>30)? "hello" : "Does not satisfy")

//comparison operator(== != ===)//
var x = 10;
var y = 20;
console.log((x==y)? "hello" : "Does not satisfy")

var x = 20;
var y = 20;
console.log((x==y)? "hello" : "Does not satisfy")

//!=//
var x = 10;
var y = 20;
console.log((x!=y)? "hello" : "Does not satisfy")

var x = 10;
var y = 10;
console.log((x!=y)? "hello" : "Does not satisfy")

//== checks only values (not string)//
var x = 10;
var y = 10;
console.log((x==y)? "hello" : "Does not satisfy")

var x = 10;
var y = 20;
console.log((x==y)? "hello" : "Does not satisfy")

//=== checks type first,later it checks value//
var x = 10;
var y = "10";
console.log((x===y)? "hello" : "Does not satisfy")











