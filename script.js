document.addEventListener('DOMContentLoaded', setup, false);

function setup() {
    addCalendar();
}

function addCalendar() {
    let calendar = document.getElementById("calendar");
    let day = new Date().getDay();
    if (day == 0) {day = 7;}//sunday is 0 in getDay()
    let currentDay = calendar.children[day];
    currentDay.classList.add("today");
    
    for (let i = 0; i < 8*(17-8); i++) {
        var element = document.createElement("div");
        if (i % 8 == 0) {
            let time = i / 8 + 8;
            element.innerHTML = ("0" + time).slice(-2) + " - " + ("0" + (time+1)).slice(-2);
            element.style.backgroundColor = "#355691";
            element.classList.add("calendar-table-header");
        } else {
            if (i == 1 || i == 10) {
                element.innerHTML = "Test";
                element.style.backgroundColor = "#bf4040";
                element.classList.add("calender-table-item")
            } else if (i == 19 || i == 28 || i == 37) {
                element.innerHTML = "Test";
                element.style.backgroundColor = "#bf9d40";
                element.classList.add("calender-table-item")
            } else if (i == 46 || i == 55) {
                element.innerHTML = "Test";
                element.style.backgroundColor = "#1a9c30";
                element.classList.add("calender-table-item")
            } else {
                element.innerHTML = "&nbsp;";
                element.classList.add("calendar-table-item");   
            }
        }
        calendar.appendChild(element);
    }
}


// Calendar

function previousWeek() {
    alert("Sidste uge :D");
}

function nextWeek() {
    alert("Næste uge :D");
}

function setActiveButton(button) {
    removeActiveButton(button.parentElement);
    button.classList.add("active-button");
}

function removeActiveButton(parent) {
    let c = parent.children;
    for (let i = 0; i < c.length; i++) {
        c[i].classList.remove("active-button");
      }
}


//scroll to box

function scrollWin(){
    let infoboxes = document.getElementById("infoboxes");
    window.scrollTo({
        top: findPos(infoboxes) - 64 - 10,
        left: 0,
        behavior: 'smooth'
    });
}

function findPos(obj) {
    let curtop = 0;

    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return curtop;
    }
}
