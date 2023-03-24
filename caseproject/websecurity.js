

let li1 = document.getElementById("prop1")
let li2 = document.getElementById("prop2")
let li3 = document.getElementById("prop3")
let li4 = document.getElementById("prop4")
let li5 = document.getElementById("prop5")
let li6 = document.getElementById("prop6")

changeText();
function changeText(){
    li1.innerHTML = ("You are currently " + checkOnline());
    li2.innerHTML = ("This size of your screen is " + screen.width + "x " + screen.height)
    li3.innerHTML = (checkColor())
    li4.innerHTML = ("Your current browser is " + navigator.appName);
    li5.innerHTML = ("The verison is " + navigator.appVersion)
    li6.innerHTML = (checkLanguage());
}



function checkOnline(){
    if (navigator.onLine) {
        return "connected to the internet"
    }
    else {
        return "not connected to the internet"
    }
}

function checkLanguage(){
    if(navigator.language === "en-US"){
        return "Your browser is in english"
    }
    else {
        return navigator.language
    }

}

function checkColor(){
    let color = screen.colorDepth
    let returnstatement = "Your screens color depth is " + color + "-Bit"
    return returnstatement
}