

var time = document.querySelector('.Clock-body')
var one = document.getElementById('1')

setInterval(CurrentTime, 1000)
function CurrentTime() {
    let D = new Date();
    let hour = D.getHours();
    let min = D.getMinutes();
    let sec = D.getSeconds();
    let session = "A.M.";

    if (hour == 0) {
        hour = 12
    }
    if (hour > 12) {
        session = "P.M";
        hour = hour - 12;
    }
    time.innerHTML = `${hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec} : ${session}`

    if (9 < hour < 12) {
        one.src = "./images/evening.jpg"
    }
    if (12 < hour < 2) {
        one.src = "./images/morning.jpg"
    }
    if (2< hour <5) {
        one.src = "./images/night.jpg"
    }
    else {
        one.src = "./images/noon.jpg"

    }


}

CurrentTime()