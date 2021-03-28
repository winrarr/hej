document.addEventListener('DOMContentLoaded', setup, false);

function setup() {
    addSchedule();
}

function addSchedule() {
    let calendar = document.getElementById("calendar");
    let day = new Date().getDay();
    if (day == 0) {day = 7;} //sunday is 0 in getDay()
    let currentDay = calendar.children[day];
    currentDay.className = "calendar-table-row-header-today";
    
    for (let i = 0; i < 8*(17-8); i++) {
        var element = document.createElement("div");
        if (i % 8 == 0) {
            let time = i / 8 + 8;
            element.innerHTML = ("0" + time).slice(-2) + " - " + ("0" + (time+1)).slice(-2);
            element.classList.add("calendar-table-header");
        } else {
            element.innerHTML = "&nbsp;";
            element.classList.add("calendar-table-item");
        }
        calendar.appendChild(element);
    }
}

function previousWeek() {
    alert("Sidste uge :D");
}

function nextWeek() {
    alert("Næste uge :D");
}


// Schedule

function setActiveButton(button) {
    var c = button.parentElement.children;
    for (let i = 0; i < c.length; i++) {
      c[i].classList.remove("active-button");
    }
    button.classList.add("active-button");
}

//scroll to box
function scrollWin(){
    var myelement = document.getElementById("scroll-button");
    myelement.scrollIntoView({behavior:"smooth"});
}