
for(i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}

function handleclick(){
    //alert('hi');
    //var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    var a = this.innerHTML;
    makeSound(a);
    addAnimation(a)
   }

document.addEventListener("keydown",handlepress);

function handlepress(event){
    makeSound(event.key);
    addAnimation(event.key);
}


function makeSound(key){
    switch(key){
        case "w": var audio = new Audio('sounds/crash.mp3');
                  audio.play();
        break;
        
        case "a": var audio = new Audio('sounds/kick-bass.mp3');
                  audio.play();
        break;
       
        case "s": var audio = new Audio('sounds/snare.mp3');
                  audio.play();
        break;
        
        case "d": var audio = new Audio('sounds/tom-1.mp3');
                  audio.play();
        break;
        
        case "j": var audio = new Audio('sounds/tom-2.mp3');
                  audio.play();
        break;
       
        case "k": var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();
        break;
       
        case "l": var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
       
        break;
    default:alert("You pressed the wrong button");
    }
}

function addAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey)
    setInterval(() => {
        activeKey.classList.remove("pressed");
    }, 2000); 
    activeKey.classList.add("pressed");
}



//lert('hello');

