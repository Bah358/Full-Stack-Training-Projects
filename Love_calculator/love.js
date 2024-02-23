var name= prompt("what is your name");
var name2= prompt("what is your boy/girl name");

function hello(){
var n = Math.random()*100;
n= Math.floor(n);
var txt=("The love that groups " +name+ " and " +name2+ " is " + n + " %");
if(n<50){
    var type="You are not meant to be together";
}
else if(n>50 && n<75){
    var type="Yor are in love, but you need time";
}
else{
      var type ="You create a gorgeous couple";
     }
document.getElementById("demo").innerHTML=txt;
document.getElementById("demo1").innerHTML=type;
// document.getElementById("demo2").innerHTML=n;
}