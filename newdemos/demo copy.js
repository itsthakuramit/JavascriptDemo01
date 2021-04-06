// 'use strict'
// to enforce declarations

// var, let, const

var currentyear = 2021;
// const currentyear = 2021;
// var nextyr;

// currentyear=2022;

var salary = 10000;
// console.log('Sam is getting the salary '+salary)
var salary = 20000;

bonus=500;
// console.log('This month Sam will get '+salary+bonus)

// console.log(salary+bonus+' received by Sam')

result = salary+bonus+' received by Sam';

//console.log(result)

// for (let index = 0; index < 10; index++) {
//     console.log(index)
    
// }


// function nextyear(currentyr){
//     console.log('Inside next year function...')
//     let nxtyr = currentyr+1
//     console.log(nxtyr)
// }

// nextyr = nextyear(currentyear);
// console.log('line 38')
// console.log(nextyr)

// nextyr = nextyear(currentyear);
// console.log('line 42')
// console.log(nextyear(2022))



function calc(num1,num2){
 return num1+num2   
}

console.log(calc(10,20));


function wel(name){
    return "Welcome "+name
}
   
console.log(wel('Sam'));

function greetings(){
    console.log("Hi !!")
}
   
console.log("test "+greetings());
