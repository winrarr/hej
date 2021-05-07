document.addEventListener('DOMContentLoaded', setup, false);

var container;
var url = 'http://84.238.98.221:84/api/'
var courseabbr;
var courseJSON;
var handinJSONonly3;
var announceJSONonly3;
var handinJSONall;
var announceJSONall;

function setup() {
    container = document.getElementById("content-container");
    courseabbr = getCourseAbbr();
    loadAllData();
    displayCoursePlan();
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
    loadCourseData(function(data,err){

    })
    load3Handins(function(data,err){

    })
    load3Announcements(function(data,err){

    })
    loadAllHandins(function(data,err){

    })
    loadAllAnnouncements(function(data,err){

    })
}

async function loadCourseData(){
    url2 = url + 'courses?abbreviation=' + courseabbr;
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
    container.innerHTML = `
    <table id='content-table'>
        <tr>
            <th>Day</th>
            <th>Lecture</th>
            <th>Literature</th>
            <th>Slides</th>
            <th>Videos</th>
            <th>Exercises</th>
            <th>Assignments</th>
        </tr>
    </table>`;
    let coursecontent = document.getElementById("content-table");
    
    for (let row = 0; row < 20; row++) { //this is rows! change later!
        let trow = document.createElement('tr');

        //Day
        let day = document.createElement('td');
        day.innerHTML = row;
        trow.appendChild(day);

        //Lecture
        let lecture = document.createElement('td');
        if (row < 6) {
            lecture.innerHTML = "Computerarchitechture " + row;
        } else if (row < 10) {
            lecture.innerHTML = "OS " + row;
        } else {
            lecture.innerHTML = "Networking " + row;
        }
        trow.appendChild(lecture);

        //Literature
        let literature = document.createElement('td');
        if (row % 2 == 0) {
            literature.innerHTML = "Chapter " + (row/2+1);
        } else {
            literature.innerHTML = "-";
        }
        trow.appendChild(literature);

        //Slides
        let slides = document.createElement('td');
        slides.innerHTML = `<button onclick="displayCourseSlides();">Slide ` + row +"</button>";
        trow.appendChild(slides);

        //Videos
        let videos = document.createElement('td');
        videos.innerHTML = `<button onclick="displayRecordings();">Video ` + row +"</button>";
        trow.appendChild(videos);

        //Exercises
        let exercises = document.createElement('td');
        exercises.innerHTML = row;
        trow.appendChild(exercises);

        //Assignments
        let assignments = document.createElement('td');
        assignments.innerHTML = "-";
        trow.appendChild(assignments);

        coursecontent.appendChild(trow);
    }

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
    container.innerHTML = `
    <div id="recordings">
        <table id="recordings-table">
            <tr>
                <th>Lecture</th>
                <th>Video</th>
            </tr>
            <tr>
                <td>Lecture 1</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Course introduction</td>
            </tr>  
            <tr>
                <td>Lecture 2</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Actual Course introduction</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">How to avoid getting rickrolled.exe</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://www.youtube.com/watch?v=Q3BCGijAO6E">Micrco programming</td>
            </tr>  
            <tr>
                <td>Lecture 5</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">never gonna</td>
            </tr>  
            <tr>
                <td>Lecture 6</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">give you up</td>
            </tr>  
        </table>
    </div>`;
}

function displayCourseMaterial(){
    reset();
    container.innerHTML = courseJSON.materialtext;
}

function displayCourseSlides(){
    reset();
    container.innerHTML = `
    <div id="slides">
        <table id="slides-table">
            <tr>
                <th>Lecture #</th>
                <th>Video</th>
            </tr>
            <tr>
                <td>Lecture 1</td>
                <td><a href="https://blackboard.au.dk/bbcswebdav/courses/BB-Cou-UUVA-94698/slides/intro-diego.pdf">Course introduction</td>
            </tr>  
            <tr>
                <td>Lecture 2</td>
                <td><a href="https://blackboard.au.dk/bbcswebdav/courses/BB-Cou-UUVA-94698/slides/logic-diego.pdf">Digital logic level</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">rickroll-blocker.msi</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://blackboard.au.dk/bbcswebdav/courses/BB-Cou-UUVA-94698/slides/microp-diego.pdf">Micrco programming</td>
            </tr>   
        </table>
    </div>`;

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
