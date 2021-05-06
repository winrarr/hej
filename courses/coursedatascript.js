document.addEventListener('DOMContentLoaded', setup, false);

var container;
var url = 'http://84.238.98.221:84/api/course/'
var courseJSONobject;

function setup() {
    container = document.getElementById("content-container");
    loadAllData();
    displayCoursePlan();
}

function reset() {
    container.innerHTML = "";
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
            return "ExSys";
    }
    return null;
}
function loadAllData(){
    loadCourseData(function(data,err){

    })
}

async function loadCourseData(){
    abbreviation = getCourseAbbr();
    let response = await fetch(url+abbreviation);
    let responseText = await response.text();
    alert(responseText);
    responseText = responseText.substring(1,responseText.length-1);
    courseJSONobject = JSON.parse(responseText);
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
    container.innerHTML = `
    <div id="handins">
        <table id="handins-table">
            <tr>
                <th>Handin </th>
                <th>Submit page link</th>
            </tr>
            <tr>
                <td>Digital Logic Level</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>  
            <tr>
                <td>New assignment is available</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>  
            <tr>
                <td>Remember to download WinRar</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>  
        </table>
    </div>`;
}

function displayAnnouncements(){
    reset();
    container.innerHTML = `
    <div id="announcements">
        <table id="announcements-table">
            <tr>
                <th>Date</th>
                <th>Topic</th>
            </tr>
            <tr>
                <td>The stone age</td>
                <td>The lecture time this week has changed</td>
            </tr>  
            <tr>
                <td>Today</td>
                <td>New assignment is available</td>
            </tr>  
            <tr>
                <td>22/3/2021</td>
                <td>Remember to download WinRar</td>
            </tr>  
        </table>
    </div>`;
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
    container.innerHTML = courseJSONobject.material_text;
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
    container.innerHTML = courseJSONobject.intro_text;
}
function otherInfoDisplayTools(){
    reset();
    container.innerHTML = courseJSONobject.tool_text;
} 
function otherInfoDisplayGroups(){
    reset();
    container.innerHTML = courseJSONobject.group_text;
}
function otherInfoDisplayExam(){
    reset();
    container.innerHTML = courseJSONobject.exam_text;

}
function otherInfoDisplayContacts(){
    reset();
    container.innerHTML = courseJSONobject.contact_text;
}
function otherInfoDisplayEvaluation(){
    reset();
    container.innerHTML = courseJSONobject.eval_text;
}
