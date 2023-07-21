/*
Challenge 1
function greeting(fname, lname){
    return `Hello ${fname} ${lname}`;
}

console.log(greeting("Jose", "Garcia"));
*/
const greeting = (fname, lname) => `Hello ${fname} ${lname}`;

console.log(greeting("Jose", "Garcia"));
/*
Challenge 2

function square(x){
    return x * x;
}

console.log(square(3));
*/

const square = x => x*x;
console.log(square(2));

/*
Challenge 3


function largestNum(num1, num2){
    return num1 > num2 ? num1 : num2; 
}

console.log(largestNum(5, 6));

*/

const largestNum = (num1, num2) => num1 > num2 ? num1 : num2 ;
console.log(largestNum(12, 8));


const animals = ["Llama", "chicken", "dog", "cat"];
/*cahlleng 4
animals.forEach(function (eachAnimal){
    const upperCase = eachAnimal.toUpperCase();
    console.log(upperCase);
});
*/
animals.forEach(eachAnimal => {
    const upperCase = eachAnimal.toUpperCase();
    console.log(upperCase);
})

const scores = [5, 10, 15, 20];
/* Challenge 5
function totals(accumulatore, curValue){
    return accumulatore + curValue;
}

console.log(scores.reduce(totals));
*/

console.log(scores.reduce((accumulatore, curVal) => accumulatore + curVal));


