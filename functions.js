//Functions Assesment

let firstLetter ='A'
function firstLetterName()
{
    return (firstLetter)
}
alert('The first letter in Alyssa is '+ firstLetter);


//Function 2 Divisible by Two 
let number = 2 
let a = 8
let b = 9
function divisibleByTwo (x){ 
    if (x % number === 0)
     console.log ('The Number ', x ,' is divisible by 2' , true);
    else 
    console.log ('The Number ', x ,' is not divisible by 2', false);
}
divisibleByTwo(8);
divisibleByTwo(9);


function largestNum () {
var largestNumArr =[20,25]

console.log(Math.max.apply(null,largestNumArr));
    }  
    largestNum();