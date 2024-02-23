num1 = prompt("Enter the first number");
num2=  prompt("Enter the second number");

var x = prompt("Type the operation");
     


function add (num1,num2) {
    return num1 + num2;
}

function subtract (num1,num2) {
    return num1 - num2;
}

function multiply (num1,num2) {
    return num1 * num2;
}

 function divide (num1,num2) {
     return num1 / num2;
}

function module (num1,num2) {
    return num1 % num2;
}

function calculator(num1, num2, operators) {
    return operators(num1, num2);
}

 
function setElements(){
    console.log(v);
    document.getElementById("i").innerHTML= v;
}
// document.getElementById("output").innerHTML=x;

//document.querySelector("h1").innerHTML= v;

// function operators(num1, num2, operator){
//      return operator(num1, num2);
// }

