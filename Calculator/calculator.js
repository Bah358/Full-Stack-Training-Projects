num1 = prompt("Enter the first number");
num2=  prompt("Enter the second number");
var x = prompt("Type the operation");
     
if(x === "add"){
    var v = add(num1,num2);
}

if(x ==="subtract"){
    var v = subtract(num1,num2);
}

if(x==="multiply"){
    var v = multiply(num1,num2);
}

if(x=="divide"){
    var v = divide(num1,num2);
}

if(x=="module"){
    var v = module(num1,num2);
}

function subtract (num1,num2) {
    return num1-num2;
}

function add (num1,num2) {
    return num1+num2;
}

function multiply (num1,num2) {
    return num1*num2;
}

function divide (num1,num2) {
    return num1 / num2;
}

function module (num1,num2) {
    return num1 % num2;
}

 
function setElement(){
    console.log(v);
    document.getElementById("i").innerHTML= v;
}