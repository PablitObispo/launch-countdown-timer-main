const daysDisplayer = document.querySelector(".days-displayer");
const hoursDisplayer = document.querySelector(".hours-displayer");
const minutesDisplayer = document.querySelector(".minutes-displayer");
const secondsDisplayer = document.querySelector(".seconds-displayer");
var days = parseInt(daysDisplayer.innerHTML);
var hours = parseInt(hoursDisplayer.innerHTML);
var minutes = parseInt(minutesDisplayer.innerHTML);
var seconds = parseInt(secondsDisplayer.innerHTML);

var counter = ()=>{
    if(seconds > 0){
        seconds--
    } else if(minutes > 0) {
        minutes--;
        seconds = 59
    } else if(hours > 0){
        hours--;
        minutes = 59;
        seconds = 59;
    } else if(days > 0){
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
    }
    
    daysDisplayer.innerHTML = days > 9 ? days : "0" + days.toString();
    hoursDisplayer.innerHTML = hours > 9 ? hours : "0" + hours.toString();
    minutesDisplayer.innerHTML = minutes > 9 ? minutes : "0" + minutes.toString();
    secondsDisplayer.innerHTML = seconds > 9 ? seconds : "0" + seconds.toString();
}

window.addEventListener("load", ()=>{
    window.setInterval(counter, 1)
})