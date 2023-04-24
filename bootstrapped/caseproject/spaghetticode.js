
var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDay();
var date = today.getDate();
var nextDay = checkNextDay(day);
var opentime = document.getElementById("opentime")


const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("The date is currently " + date)
console.log("The day number is " + day + " which is " + weekdays[day])
console.log("The next day is being reported as " + nextDay + " which is "+ weekdays[nextDay])
console.log("The hour in military time is currently " + hour)
console.log("The minutes is currently " + minutes)



function checkNextDay(day){
    if(day < 6){
        return day + 1
    }
    else {
        return 0
    }

}

//Dictionary of holidays
const holidays = {
    "01/01": {name: "New Year's Day", reason: "holiday"},
    "12/25": {name: "Christmas Day", reason: "holiday"}
  };

// Check if today is a holiday
const month = today.getMonth() + 1;
const formattedDate = (month < 10 ? "0" + month : month) + "/" + (date < 10 ? "0" + date : date);
if (holidays[formattedDate]) {
  opentime.innerHTML = "We are currently closed for " + holidays[formattedDate].name + " !";
} else {
  checkOpen();
}


//Calculation depending on what day it is to change time that is open

function checkOpen() {
    if(day == 0){
        if (hour > 8) {
            if (hour < 18) {
                opentime.innerHTML = "We are open today till 6 PM!";
            }
            else {
                opentime.innerHTML = "We are closed, we will open tomorrow at 6 AM!";
            }
        }
        else {
            opentime.innerHTML = "We are closed, we will open today at 8 AM!";
            
        }
    }

    if(day == 1 || day == 2) {
        if (hour > 6) {
            if (hour < 17) {
                opentime.innerHTML = "We are open today until 5 PM!";
            }
            else {
                opentime.innerHTML = "We are closed, we will open tomorrow at 6 AM!";
            }
        }
        else {
            opentime.innerHTML = "We are closed, we will open today at 6 AM!";
        }
    }

    if(day == 3 || day == 4|| day == 5){
        if (hour > 6) {
            if (hour < 22) {
                opentime.innerHTML = "We are open till 10 PM today!";
            }
            else {
                opentime.innerHTML = "We are closed, we will open tomorrow  at 6 AM!";
            }
        }
        else {
            opentime.innerHTML = "We are closed, We will open at 6 AM today!";
        }
    }

    
    if(day == 6){
        if (hour > 6) {
            if (hour < 22) {
                opentime.innerHTML = "We are open till 10 PM today!";
            }
            else {
                opentime.innerHTML = "We are closed, we will open tomorrow at 8 AM!";
            }
        }
        else {
            opentime.innerHTML = "We are closed, We will open at 6 AM today!";
        }
    }

}


