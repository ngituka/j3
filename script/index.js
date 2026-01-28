function getTime(){
    let today = new Date();
    let wedding = new Date(2026,7,8,11,0,0);
    let diff = wedding-today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
    let seconds = Math.floor((diff % (1000 * 60)) / 1000).toString();
    if (days.length == 1){
        days = "0" + days;
    }
    if (hours.length == 1){
        hours = "0" + hours;
    }
    if (minutes.length == 1){
        minutes = "0" + minutes;
    }
    if (seconds.length == 1){
        seconds = "0" + seconds;
    }
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".mins").innerHTML = minutes;
    document.querySelector(".secs").innerHTML = seconds;
}   
setInterval(getTime, 1000);
