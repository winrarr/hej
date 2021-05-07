document.addEventListener('DOMContentLoaded', setup, false);

var handinJSONonly8;
var announceJSONonly8;
var url = 'http://84.238.98.221:84/api/'

function setup() {
    addCalendar();
    loadAllData();
}

function formatDate2(input) {
    var datearray = input.split("-");
    return datearray[2] + "/" + datearray[1] + "-" + datearray[0];
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
            element.style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--color-border-dark");
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

function addStudent() {

    fetch('http://localhost:8000/api/student/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Rasmus"
        })
    });
}

function loadAllData(){
    load8Handins(function(data,err){

    })
    load8Announcements(function(data,err){

    })
}

async function load8Handins(){
    url2 = url + 'assignments?amount=8';
    let response = await fetch(url2);
    let responseText = await response.text();
    handinJSONonly8 = JSON.parse(responseText);
    setupHandinSidebar();
}

async function load8Announcements(){
    url2 = url + 'announcements?amount=8';
    let response = await fetch(url2);
    let responseText = await response.text();
    announceJSONonly8 = JSON.parse(responseText);
    setupAnnouncementSidebar();
}

function setupHandinSidebar(){
    /*
    handincontainer = document.getElementById("handins");
    string = '<p>Handins</p>'
    for (i = 0; i < 3; i++) {
        string = string + '<div onclick="displayHandins()">' + handinJSONonly3[i].title + ' ' + formatDate(handinJSONonly3[i].deadline) + '</div>'
    }
    handincontainer.innerHTML = string;*/
}

function setupAnnouncementSidebar(){
    announcecontainer = document.getElementById("announcements");
    string = '<div class="boxtitle">Announcements</div><div>'
    for (i = 0; i < 8; i++) {
        string = string + `
        <div onclick="alert('Goto Announcement');" class="announcement-element">
            <p class="infobox-text">` + announceJSONonly8[i].title + `</p>
            <p class="infobox-text2">` + formatDate2(announceJSONonly8[i].date) + `</p>
        </div>
        `;
    }
    string = string + `
        <button type="button" class="infobox-button" onclick="alert('Goto All Announcements');">
            All Announcements
        </button>
    </div>
    `;
    announcecontainer.innerHTML = string;
}