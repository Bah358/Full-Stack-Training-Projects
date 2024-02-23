function eventThatHappened (eventType,key,durationOfPress){
    this.eventType = eventType;
    this.key = key;
    this.durationOfPress = durationOfPress
    }
function anotherEventListener(typeOfEvent,key,durationOfPress,callBack){
    var event1 = new eventThatHappened(typeOfEvent,key,durationOfPress)
    if (event1.eventType === typeOfEvent){
        callBack(event1);
    }
}

var a = prompt("enter they key you want to press")
anotherEventListener("keypress",a,2,handleEvent);
    


function handleEvent(event){
     alert(event.key);
 }