let DayText = document.getElementById('DayText')
let HourText = document.getElementById('HourText')
let MiniText = document.getElementById('MiniText')
let SecText = document.getElementById('SecText')

let targetdate = new Date()

targetdate.setDate(targetdate.getDate() + 10)


let currentdate = new Date()


let Difference = targetdate - currentdate;


let days = Difference / (1000 * 60 * 60 * 24);

DayText.innerHTML = days

let hour = Difference / (1000 * 60 * 60);

HourText.innerHTML = hour

let min = Difference / (1000 * 60);

MiniText.innerHTML = min

let sec = Difference / (1000);

SecText.innerHTML = sec


let count = 0;
let countforhour = 0;
let daycount = 0
setInterval(() => {
    count++

    SecText.innerHTML = sec--
    console.log(count);

    if (count == 60) {
        min--
        MiniText.innerHTML = min
        count = 0
        countforhour++
        // console.log(`hour count${countforhour}`);

    }
    if (countforhour == 60) {
        hour--
        HourText.innerHTML = hour
        countforhour = 0
        daycount++
    }
    if (daycount == 24) {
        days--
        DayText.innerHTML = days
        daycount = 0
    }
}, 1000);

