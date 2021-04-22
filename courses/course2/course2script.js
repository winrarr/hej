document.addEventListener('DOMContentLoaded', setup, false);

var container;

function setup() {
    container = document.getElementById("content-container");
    displayCoursePlan();
}

function reset() {
    container.innerHTML = "";
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
        lecture.innerHTML = "Linear Algebra " + row;
        trow.appendChild(lecture);

        //Literature
        let literature = document.createElement('td');
        literature.innerHTML = "Pages " + row*8 + "-"+(row*8+7);
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
                <td>Assignment 1</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>  
            <tr>
                <td>Assignment 2</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>  
            <tr>
                <td>Assignment 3</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr>
            <tr>
                <td>Assignment 4</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr> 
            <tr>
                <td>Assignment 5</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145314_1&content_id=_2887280_1&mode=reset">
                Choose document to submit</td>
            </tr> 
            <tr>
                <td>Assignment 6</td>
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
                <td>19/5</td>
                <td>Handin 3 deadline extended</td>
            </tr>  
            <tr>
                <td>26/4</td>
                <td>Exams are cancelled</td>
            </tr>  
            <tr>
                <td>10/2</td>
                <td>Python is amazing :)</td>
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
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Errors</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Python introduction</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://www.youtube.com/watch?v=Q3BCGijAO6E">Vectors</td>
            </tr>  
            <tr>
                <td>Lecture 5</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Matrices</td>
            </tr>  
            <tr>
                <td>Lecture 6</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Matrix multiplication</td>
            </tr>  
        </table>
    </div>`;
}

function displayCourseMaterial(){
    reset();
    container.innerHTML = `
    <div id="course-material-grid">
        <div id="course-material-items">
        <h1 id="course-material-header">Books<\h1>
        <p id="course-material-text">We will be using no books...<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">Copyrighted content<\h1>
        <p id="course-material-text">There is none!<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">None-copyrighted content<\h1>
        <p id="course-material-text">Also none!<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">Optional content<\h1>
        <p id="course-material-text">Nothing<\p></div>
    </div>`;
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
                <td><a href="https://blackboard.au.dk/bbcswebdav/courses/BB-Cou-UUVA-94698/slides/logic-diego.pdf">Vectors</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://www.youtube.com/watch?v=YddwkMJG1Jo">Matrixes</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://blackboard.au.dk/bbcswebdav/courses/BB-Cou-UUVA-94698/slides/microp-diego.pdf">Matrix Multiplication</td>
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
    container.innerHTML = `
    <h3>Welcome</h3>
    Lineær algebra er et centralt værktøj i matematisk modellering i mange naturvidenskabelige fag. Det handler om at formulere problemstillinger i termer af matricer og vektorer, og om metoder til at løse forskellige typer af matrixligninger.  Ofte ønsker man at udføre beregningerne ved hjælp af en computer og i denne forbindelse er der udviklet forskellige beregningsteknikker med særlige gode egenskaber for visse problemstillinger. Kurset vil introducere nogle af disse metoder, med fokus på hvordan disse teknikker kan anvendes via programmeringssproget Python. Relevante dele af den tilknyttede vektorrumsteori vil også blive indført.
    `;
}
function otherInfoDisplayTools(){
    reset();
    container.innerHTML = `
    <h3>Tools</h3>
    Python is awesome :)
    `;
} 
function otherInfoDisplayGroups(){
    reset();
    container.innerHTML = `
    <h3>Groups</h3>
    Sign up for groups here. It will only be relevant in some assignments
    <button onclick="alert('You have signed up for a group')">Sign Up for a random group</button>
    `;

}
function otherInfoDisplayExam(){
    reset();
    container.innerHTML = `
    <h3>Exam</h3>
    <p>The exam will be extremely easy.</p>
    <p>That is just how it is.</p>
    <p>There will be 200 questions and you have to get 1 right to pass.
    You have a generous timeframe of 20 minutes.</p>
    `;

}
function otherInfoDisplayContacts(){
    reset();
    container.innerHTML = `
    <h3>Contacts</h3>
    <p>The lecturer of this course is Jeremy Johnson. Contact him at office 208 or by email: <a href="mailto: john@john.com">john@john.com</a></p>
    <p>The TA's are Sarah Jadern and Dennis Dingo, who have no phones or emails</p>
    `;
}
function otherInfoDisplayEvaluation(){
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
