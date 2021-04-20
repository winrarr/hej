document.addEventListener('DOMContentLoaded', setup, false);

var container;

function setup() {
    container = document.getElementById("content-container");
    displayCoursePlan();
}

function reset() {
    container.innerHTML = "";
}

function displayCoursePlan() {
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
        lecture.innerHTML = row;
        trow.appendChild(lecture);

        //Literature
        let literature = document.createElement('td');
        literature.innerHTML = row;
        trow.appendChild(literature);

        //Slides
        let slides = document.createElement('td');
        slides.innerHTML = row;
        trow.appendChild(slides);

        //Videos
        let videos = document.createElement('td');
        videos.innerHTML = row;
        trow.appendChild(videos);

        //Exercises
        let exercises = document.createElement('td');
        exercises.innerHTML = row;
        trow.appendChild(exercises);

        //Assignments
        let assignments = document.createElement('td');
        assignments.innerHTML = "none!";
        trow.appendChild(assignments);
    
        coursecontent.appendChild(trow);
    }

}

//decide whether or not to include handins


//decide whether or not to include announcements

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

function otherInfoDisplayIntroduction() {
    reset();
    container.innerHTML = `
    <h3>Welcome</h3>
    This course has three major parts and during each part, we will introduce you to one of the major components of modern computers. In the first part, we will focus on computer architecture where we will discuss the existing levels in the architecture of modern computers, as well as topics such as microprograms and assembly language. In the second part, we will focus on operating systems and we will go over a brief introduction of some major components of operating systems including processes, system calls, virtual memory and other important topics. In today's well-connected world, it is unthinkable to not be connected to internet which brings us to the final major topic: computer networks. Here, we will cover some of major components including different networking layers, sockets, TCP/PC and other topics.
    `;
}
function otherInfoDisplayTools(){
    reset();
    container.innerHTML = `
    <h3>Tools</h3>
    The tools in this course will be introduced during TA exercises. This page will be updated when they are needed.
    `;
} 
function otherInfoDisplayGroups() {
    reset();
    container.innerHTML = `
    <h3>Groups</h3>
    Here you can sign up for groups
    <button onclick="alert('You have signed up for a group')">Sign Up for a random group</button>
    `;

}
function otherInfoDisplayExam() {
    reset();
    container.innerHTML = `
    <h3>Exam</h3>
    <p>The exam will be extremely hard and you will all fail.</p>
    <p>That is just how it is.</p>
    <p>There will be 200 questions and you have to get 194 right to pass.
    You have a generous timeframe of 16 minutes.</p>
    `;

}
function otherInfoDisplayContacts() {
    reset();
    container.innerHTML = `
    <h3>Contacts</h3>
    <p>The lecturer of this course is Johnny Johnson. Contact him at office 204 or by email: <a href="mailto: john@john.com">john@john.com</a></p>
    <p>The TA's are Sabrina Jade and Kevin Koda, but dont contact them, they dont want that</p>
    `;
}
function otherInfoDisplayEvaluation() {
    reset();
    container.innerHTML = `
    <h3>Evaluation</h3>
    What do you rate the course?<br>
    <input type="radio" name="rating">1<br>
    <input type="radio" name="rating">2<br>
    <input type="radio" name="rating">3<br>
    <input type="radio" name="rating">4<br>
    <input type="radio" name="rating">5<br>

    What could we do better?<br>
    <input type="text"><br>

    <input type="submit">
    `;
}
