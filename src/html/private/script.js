document.addEventListener('DOMContentLoaded', setup, false);

var handinJSONonly8;
var announceJSONonly8;
var url = 'https://vm23.exsys2021.cs.au.dk/api/'

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

    let element = document.createElement("div")
    element.innerHTML = "WEEK " + today.getWeek()
    element.classList.add("calendar-table-header")

    let days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
    for (let i = 0; i < 7; i++) {
        let element = document.createElement("div")

    }

    let today = new Date()
    let day = today.getDay();
    if (day == 0) {day = 7;} // sunday is 0 in getDay()
    let currentDay = calendar.children[day];
    currentDay.classList.add("today");
    
    for (let i = 0; i < 8*(17-8); i++) {
        let element = document.createElement("div");
        if (i % 8 == 0) {
            let time = i / 8 + 8;
            element.innerHTML = ("0" + time).slice(-2) + " - " + ("0" + (time+1)).slice(-2);
            element.classList.add("calendar-table-header");
        }

        calendar.appendChild(element);
    }
}

Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
}

Date.prototype.GetFirstDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay() + (this.getDay() == 0 ? -6:1))));
}
Date.prototype.GetLastDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay() + 7)));
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
    infoboxes.scrollIntoView({behavior: "smooth"});
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
    handincontainer = document.getElementById("handins");
    string = '<div class="boxtitle">Assignments</div><div>'
    for (i = 0; i < 8; i++) {
        string = string + `<div onclick="alert('`+handinJSONonly8[i].description+`');" class="announcement-element">`;

        switch (handinJSONonly8[i].courseabbr) {
            case "EksSys":
                string = string + '<span class="dot dot-course3">';
                break;
            case "LinAlg":
                string = string + '<span class="dot dot-course2">';
                break;
            case "CompArk":
                string = string + '<span class="dot dot-course1">';
                break;
        }

        string = string + handinJSONonly8[i].courseabbr.charAt(0) + "</span>" + `
            <p class="infobox-text">` + handinJSONonly8[i].title + `</p>
            <p class="infobox-text">` + handinJSONonly8[i].courseabbr + `</p>
            <p class="infobox-text2">` + formatDate2(handinJSONonly8[i].deadline) + `</p>
        </div>
        `;
        
    }
    string = string + `
        <button type="button" class="infobox-button" onclick="alert('Goto All Handins');">
            All Handins
        </button>
    </div>
    `;
    handincontainer.innerHTML = string;
}

function setupAnnouncementSidebar(){
    announcecontainer = document.getElementById("announcements");
    string = '<div class="boxtitle">Announcements</div><div>'
    for (i = 0; i < 8; i++) {
        string = string + `<div onclick="alert('`+announceJSONonly8[i].text+`');" class="announcement-element">`;

        switch (announceJSONonly8[i].courseabbr) {
            case "EksSys":
                string = string + '<span class="dot dot-course3">';
                break;
            case "LinAlg":
                string = string + '<span class="dot dot-course2">';
                break;
            case "CompArk":
                string = string + '<span class="dot dot-course1">';
                break;
        }

        string = string + announceJSONonly8[i].courseabbr.charAt(0) + "</span>" + `
            <p class="infobox-text">` + announceJSONonly8[i].title + `</p>
            <p class="infobox-text">` + announceJSONonly8[i].courseabbr + `</p>
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