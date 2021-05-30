document.addEventListener('DOMContentLoaded', setup, false);

var container;
var url = 'https://vm23.exsys2021.cs.au.dk/api/'
var courseabbr;
var courseJSON;
var handinJSONonly3;
var announceJSONonly3;
var handinJSONall;
var announceJSONall;
var courseplanJSON;

function setup() {
    container = document.getElementById("content-container");
    courseabbr = getCourseAbbr();
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

function getCourseAbbr(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var page = page.slice(0,-5); // remove .html from string
    switch (page) {
        case "course1":
            return "CompArk";
        case "course2":
            return "LinAlg";
        case "course3":
            return "EksSys";
    }
    return null;
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
    url2 = url + 'courses?abbr=' + courseabbr;
    let response = await fetch(url2);
    let responseText = await response.text();
    responseText = responseText.substring(1,responseText.length-1);
    courseJSON = JSON.parse(responseText);
}

async function load3Announcements(){
    url2 = url + 'announcements?course=' + courseabbr +'&amount=3';
    let response = await fetch(url2);
    let responseText = await response.text();
    announceJSONonly3 = JSON.parse(responseText);
    setupAnnouncementSidebar();
}

async function loadAllAnnouncements(){
    url2 = url + 'announcements?course=' + courseabbr;
    let response = await fetch(url2);
    let responseText = await response.text();
    announceJSONall = JSON.parse(responseText);
}

async function load3Handins(){
    url2 = url + 'assignments?course=' + courseabbr +'&amount=3';
    let response = await fetch(url2);
    let responseText = await response.text();
    handinJSONonly3 = JSON.parse(responseText);
    setupHandinSidebar();
}

async function loadAllHandins(){
    url2 = url + 'assignments?course=' + courseabbr;
    let response = await fetch(url2);
    let responseText = await response.text();
    handinJSONall = JSON.parse(responseText);
}

async function loadCoursePlan(){
    url2 = url + 'courseplan?course=' + courseabbr;
    let response = await fetch(url2);
    let responseText = await response.text();
    courseplanJSON = JSON.parse(responseText);
    displayCoursePlan();
}

function setupHandinSidebar(){
    handincontainer = document.getElementById("handins");
    string = '<p>Assignments</p>'
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
