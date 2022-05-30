//Question 1 :

function getValue(){
    'use strict';
    value=21;
    console.log(value);
}
getValue();
// Output shows uncaught reference error because value is defined as any operator like var or let.


//Question 2 :

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

//Output will be 0,2,2 respectively.


//Question 3 :

for(let i = 1; i < 5; i++){
    if(i === 3) continue;
    console.log(i);
}

//Output will be 1,2,4. because this for loop should print 1,2,3,4.but because of continue clause, it will skip current iterate , it has skip 3.
//so , Output printed is 1,2,4.


//Question 4:
console.log(typeof typeof 1);

//Output is string.

//Question 5:
[...'hello'];

//Question 6:

var number = 87;
var printNumber = function(){
    console.log(number);
    var number = 47;
};
printNumber();

//Output is undefined. 

//Question 7:

console.log(23 < 24 < 35);
console.log(35 > 24 > 23);

//Output is true , false respectively.

//Question 8:

const numbers = [1,2,3];
numbers[10] = 11;
console.log(numbers);
 
//Output will be [1,2,3,empty * 7 , 11]
//means it will print array till index 10 , we have values for index 0,1,2,10 rest will be empty array.

//Question 9:

const human={
    name: 'John',
    age: 29,
};
for (const item in human){
    console.log(item);
}

//Output is name , age.

//Question 10:

var a = 3;
var b = {
    a : 9,
    b : ++a
  
};
console.log(a + b.a + ++b.b);

//Output is 18.






