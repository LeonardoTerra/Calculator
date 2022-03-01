var seconds = 00
var miles = 00

//This code will run the stopwatch numbers
var stopwatch_seconds = document.getElementById("seconds")
var stopwatch_miles = document.getElementById("miles")

//This will run the stopwatch 
var stopwatch_start = document.getElementById("start")
var stopwatch_stop = document.getElementById("stop")
var interval;

//This make the stopwatch work

function startTimer() {
    miles++;

    if (miles < 9) {
        stopwatch_miles.innerHTML = "0" + miles;
    }
    if (miles > 9) {
        stopwatch_miles.innerHTML = miles;
    }
    if (miles > 99) {
        seconds++;
        stopwatch_seconds.innerHTML = "0" + seconds;
        miles = 0;
        stopwatch_miles.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        stopwatch_seconds.innerHTML = seconds;
    }
}

// Here I define how the buttons are going to work

stopwatch_start.onclick = () => {
    interval = setInterval(startTimer, 10)
}
stopwatch_stop.onclick = () => {
    stopwatch_stop.innerHTML = "Reset"
    clearInterval(interval)
}
//double click is pretty useful
stopwatch_stop.ondblclick = () => {
    stopwatch_stop.innerHTML = "Stop"
    clearInterval(interval)
    seconds = "00"
    miles = "00"
    stopwatch_seconds.innerHTML = seconds;
    stopwatch_miles.innerHTML = miles
}

//NEXT IMPROVEMENTS

/* 
What if the stopwatch runs for hours? 
-Implement the hours camp

What if the user wants to safe his times in a database?
-Implement SQL Scrum

Beautifies the code
- Place shadows to the buttons
- Change the buttons' font-family

*/