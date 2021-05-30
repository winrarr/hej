document.addEventListener('DOMContentLoaded', setup, false);

var container;
var courseabbr;
var courseJSON;
var handinJSONonly3;
var announceJSONonly3;
var handinJSONall;
var announceJSONall;
var courseplanJSON;

function setup() {
    container = document.getElementById("content-container");
    courseabbr = window.location.pathname.split("/").pop().slice(0,-5)
    loadAllData();
}

function reset() {
    container.innerHTML = "";
}

function formatDate(input) {
    var datearray = input.split("-");
    return "(" + datearray[2] + "/" + datearray[1] + ")";
}

function formatDate2(input) {
    var datearray = input.split("-");
    return datearray[2] + "/" + datearray[1] + "-" + datearray[0];
}

function loadAllData(){
    loadCoursePlan();
    loadCourseData();
    load3Handins();
    load3Announcements();
    loadAllHandins();
    loadAllAnnouncements();
}

async function loadCourseData(){
    let response = await fetch(`/api/courses?abbr=${courseabbr}`);
    let responseText = await response.text();
    responseText = responseText.substring(1,responseText.length-1);
    courseJSON = JSON.parse(responseText);
}

async function load3Announcements(){
    let response = await fetch(`/api/announcements?course=${courseabbr}&amount=3`);
    let responseText = await response.text();
    announceJSONonly3 = JSON.parse(responseText);
    setupAnnouncementSidebar();
}

async function loadAllAnnouncements(){
    let response = await fetch(`/api/announcements?course=${courseabbr}`);
    let responseText = await response.text();
    announceJSONall = JSON.parse(responseText);
}

async function load3Handins(){
    let response = await fetch(`/api/assignments?course=${courseabbr}&amount=3`);
    let responseText = await response.text();
    handinJSONonly3 = JSON.parse(responseText);
    setupHandinSidebar();
}

async function loadAllHandins(){
    let response = await fetch(`/api/assignments?course=${courseabbr}`);
    let responseText = await response.text();
    handinJSONall = JSON.parse(responseText);
}

async function loadCoursePlan(){
    let response = await fetch(`/api/courseplan?course=${courseabbr}`);
    let responseText = await response.text();
    courseplanJSON = JSON.parse(responseText);
    displayCoursePlan();
}

function setupHandinSidebar(){
    handincontainer = document.getElementById("handins");
    string = '<p>Handins</p>'
    for (i = 0; i < 3; i++) {
        string = string + '<div onclick="displayHandins()">' + handinJSONonly3[i].title + ' ' + formatDate(handinJSONonly3[i].deadline) + '</div>'
    }
    handincontainer.innerHTML = string;
}

function setupAnnouncementSidebar(){
    announcecontainer = document.getElementById("announcements");
    string = '<p>Announcements</p>'
    for (i = 0; i < 3; i++) {
        string = string + '<div onclick="displayAnnouncements()">' + announceJSONonly3[i].title + ' ' + formatDate(announceJSONonly3[i].date) + '</div>'
    }
    announcecontainer.innerHTML = string;
}

function displayCoursePlan(){
    reset();
    string = `
    <table id='content-table'>
        <tr>
            <th>Date</th>
            <th>Lecture</th>
            <th>Slides</th>
            <th>Videos</th>
            <th>Exercises</th>
        </tr>
    `;
    for (i = 0; i < courseplanJSON.length; i++) {
        string = string + "<tr><td>" + formatDate2(courseplanJSON[i].lecturedate) + "</td><td>" + courseplanJSON[i].lecturename + '</td><td><button onclick="displayCourseSlides();">' + courseplanJSON[i].slideslink + '</button></td><td><button onclick="displayRecordings();">' + courseplanJSON[i].recordinglink +`</button></td><td><button onclick="alert('Open Exercise :(');">` + courseplanJSON[i].exerciselink+`</td></tr>`
    }

    string = string + "</table>";

    container.innerHTML = string;
}

function displayHandins(){
    reset();
    string = `
    <div id="handins">
        <table id="handins-table">
            <tr>
                <th>Handin </th>
                <th>Deadline </th>
                <th>Description</th>
                <th>Status</th>
                <th>Submit</th>
            </tr>
    `;

    for (i = 0; i < handinJSONall.length; i++) {
        string = string + "<tr><td>" + handinJSONall[i].title + "</td><td>" + formatDate2(handinJSONall[i].deadline) + "</td><td>" + handinJSONall[i].description + "</td><td>Not handed in</td><td>" + `<button onclick="alert('Submit')">Submit</button></tr>`
    }
    string = string + "</table></div>";
    container.innerHTML = string;
}

function displayAnnouncements(){
    reset();
    string = `
    <div id="announcements">
        <table id="announcements-table">
            <tr>
                <th>Title </th>
                <th>Date </th>
                <th>Text</th>
            </tr>
    `;

    for (i = 0; i < announceJSONall.length; i++) {
        string = string + "<tr><td>" + announceJSONall[i].title + "</td><td>" + formatDate2(announceJSONall[i].date) + "</td><td>" + announceJSONall[i].text + "</td></tr>";
    }
    string = string + "</table></div>";
    container.innerHTML = string;;
}

function displayRecordings(){
    reset();
    string = `
    <div id="recordings">
        <table id="recordings-table">
            <tr>
                <th>Lecture</th>
                <th>Recording</th>
            </tr>
    `
    for(i = 0; i<courseplanJSON.length;i++) {
        string = string + "<tr><td>" + courseplanJSON[i].lecturename + `</td><td><button onclick="alert('Open Recording :(');">` + courseplanJSON[i].recordinglink + "</button></td></tr>";
    }
    string = string + "</table></div>";
    container.innerHTML = string;
}

function displayCourseMaterial(){
    reset();
    container.innerHTML = courseJSON.materialtext;
}

function displayCourseSlides(){
    reset();
    string = `
    <div id="slides">
        <table id="slides-table">
            <tr>
                <th>Lecture</th>
                <th>Slides</th>
            </tr>
    `
    for(i = 0; i<courseplanJSON.length;i++) {
        string = string + "<tr><td>" + courseplanJSON[i].lecturename + `</td><td><button onclick="alert('Open Slide :(');">` + courseplanJSON[i].slideslink + "</button></td></tr>";
    }
    string = string + "</table></div>";
    container.innerHTML = string;;

}


function displayOtherInfo(){
    reset();
    container.innerHTML = `
    <div id="other-info">
        <button onclick="otherInfoDisplayIntroduction()">Introduction to Course</button>
        <button onclick="otherInfoDisplayTools()">Tools</button>
        <button onclick="otherInfoDisplayGroups()">Groups</button>
        <button onclick="otherInfoDisplayExam()">Exam</button>
        <button onclick="otherInfoDisplayContacts()">Contacts</button>
        <button onclick="otherInfoDisplayEvaluation()">Evaluation</button>
    </div>`;
}

function otherInfoDisplayIntroduction(){
    reset();
    container.innerHTML = courseJSON.introtext;
}
function otherInfoDisplayTools(){
    reset();
    container.innerHTML = courseJSON.tooltext;
} 
function otherInfoDisplayGroups(){
    reset();
    container.innerHTML = courseJSON.grouptext;
}
function otherInfoDisplayExam(){
    reset();
    container.innerHTML = courseJSON.examtext;

}
function otherInfoDisplayContacts(){
    reset();
    container.innerHTML = courseJSON.contacttext;
}
function otherInfoDisplayEvaluation(){
    reset();
    container.innerHTML = courseJSON.evaltext;
}
