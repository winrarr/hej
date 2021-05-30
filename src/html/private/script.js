document.addEventListener('DOMContentLoaded', setup, false);

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

    let today = new Date()

    let element = document.createElement("div")
    element.innerHTML = "WEEK " + today.getWeek()
    element.classList.add("calendar-table-header")
    calendar.appendChild(element)

    let days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
    for (let i = 0; i < 7; i++) {
        let element = document.createElement("div")
        element.innerHTML = days[i] + " " + (today.GetFirstDayOfWeek() + i)
        element.classList.add("calendar-table-header")
        calendar.appendChild(element)
    }

    let day = today.getDay();
    if (day == 0) day = 7
    calendar.children[day].classList.add("today");
    
    for (let i = 0; i < 8*(17-8); i++) {
        let element = document.createElement("div");
        if (i % 8 == 0) {
            let time = i / 8 + 8;
            element.innerHTML = ("0" + time).slice(-2) + " - " + ("0" + (time+1)).slice(-2);
            element.classList.add("calendar-table-header");
        } else {
            element.classList.add("calendar-table-item")
        }

        calendar.appendChild(element);
    }
}

Date.prototype.getWeek = function() { // Magic
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
}

Date.prototype.GetFirstDayOfWeek = function() { // Magic
    let temp = new Date()
    return (new Date(temp.setDate(temp.getDate() - temp.getDay() + (temp.getDay() == 0 ? -6:1)))).getDate()
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
    fetch('/api/assignments?amount=8')
        .then(response => response.text())
        .then(response => setupHandinSidebar(JSON.parse(response)))

    fetch('/api/announcements?amount=8')
        .then(response => response.text())
        .then(response => setupAnnouncementSidebar(JSON.parse(response)))
}

function setupHandinSidebar(text){
    handincontainer = document.getElementById("handins");
    string = '<div class="boxtitle">Assignments</div><div>'
    for (i = 0; i < 8; i++) {
        string = string + `<div onclick="alert('`+text[i].description+`');" class="announcement-element">`;

        switch (text[i].courseabbr) {
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

        string = string + text[i].courseabbr.charAt(0) + "</span>" + `
            <p class="infobox-text">` + text[i].title + `</p>
            <p class="infobox-text">` + text[i].courseabbr + `</p>
            <p class="infobox-text2">` + formatDate2(text[i].deadline) + `</p>
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

function setupAnnouncementSidebar(text){
    announcecontainer = document.getElementById("announcements");
    string = '<div class="boxtitle">Announcements</div><div>'
    for (i = 0; i < 8; i++) {
        string = string + `<div onclick="alert('`+text[i].text+`');" class="announcement-element">`;

        switch (text[i].courseabbr) {
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

        string = string + text[i].courseabbr.charAt(0) + "</span>" + `
            <p class="infobox-text">` + text[i].title + `</p>
            <p class="infobox-text">` + text[i].courseabbr + `</p>
            <p class="infobox-text2">` + formatDate2(text[i].date) + `</p>
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