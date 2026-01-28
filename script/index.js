function getTime(){
    let today = new Date();
    let wedding = new Date(2026,7,8,11,0,0);
    let diff = wedding-today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log("days : " + days + "hours : " + hours + "minutes + " + minutes + "seconds : " + seconds)
    document.querySelector(".countdown").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s"
}   
setInterval(getTime, 1000);
