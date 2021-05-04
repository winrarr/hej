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
        lecture.innerHTML = "Experimental Systemdevelopment " + row;
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
                <th>Deadline</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Artifact ecology</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_3006323_1&mode=reset">
                Choose document to submit</td>
                <td>18/2/2021 kl 18:00</td>
                <td>Godkendt</td>
            </tr>
            <tr>
                <td>Case study</td>
                <td><a href=https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_3006323_1&mode=reset">
                Choose document to submit</td>
                <td>11/3/2021 kl 18:00</td>
                <td>Godkendt</td>
            </tr>  
            <tr>
                <td>Aflevering 3</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_3006323_1&mode=reset">
                Choose document to submit</td>
                <td>31/3/2021 kl 18:00</td>
                <td>Godkendt</td>
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
                <td>20/4/2021</td>
                <td>Hey, just wanted to tell you all that about a very specific subject. Namely, I want to tell you about</td>
            </tr>  
            <tr>
                <td>12/04/2021</td>
                <td>Lorem ipsum dolor!</td>
            </tr>  
            <tr>
                <td>29/3/2021</td>
                <td>Nuclear war breaks out!</td>
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
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                CSCW</td>
            </tr>  
            <tr>
                <td>Lecture 2</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                CSCW gitlab</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                Virksomhed</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                Activiy-based computing</td>
            </tr>  
            <tr>
                <td>Lecture 5</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                Plans and situated action</td>
            </tr>  
            <tr>
                <td>Lecture 6</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2998498_1&mode=reset">
                Ubiquitous computing</td>
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
        <p id="course-material-text">There is a lot! Do not share outside of this course!<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">None-copyrighted content<\h1>
        <p id="course-material-text">Some!<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">Optional content<\h1>
        <p id="course-material-text">A tiny bit<\p></div>
        <div id="course-material-items">
        <h1 id="course-material-header">Study memes for high morale!<\h1>
        <p id="course-material-text"> Henlo
        <a href="https://www.reddit.com/r/dankmemes/"> take me!<\a><\p></div>
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
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2994377_1&mode=reset">
                Kursus introduktion</td>
            </tr>  
            <tr>
                <td>Lecture 2</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2994377_1&mode=reset">
                CSCW</td>
            </tr>  
            <tr>
                <td>Lecture 3</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2994377_1&mode=reset">
                Activity-based computing</td>
            </tr>  
            <tr>
                <td>Lecture 4</td>
                <td><a href="https://blackboard.au.dk/webapps/blackboard/content/listContent.jsp?course_id=_145325_1&content_id=_2994377_1&mode=reset">
                Virksomhedsteori</td>
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
    <h3>Velkommen til Eksperimentel Systemudvikling</h3>
    <p>Formålet med kurset er at introducere jer til teorier, metoder, projekt og process modeller i forhold til udviklingen af interaktive systemer til at understøtte arbejde og praksis. Vi tager i kurset udgangspunkt i de mange udfordringer der er i forhold til software udvikling som praksis og så forståelsen af den praksis en given software løsning udvikles til. </p>
    <p>Kurset vil gøre brug af gruppearbejde i øvelser og de løbende afleveringer, samt det endelige projekt og projektrapporten. Dele af arbejdsbyrden er tilpasset grupper på 4 medlemmer. Vi forventer at I selv danner grupper med 4 medlemmer indenfor de øvelseshold I er tilknyttet.  </p>
    <p>Kurset bygger videre på de grundlæggende element i har med fra kurset Human-Computer Interaction og Softwarekonstruktion og softwarearkitektur. Vi forventer således at I forstår principper for både HCI og software arkitektur og kan anvende disse i kursets projektopgave(r).    </p>
    <p>Kurset er også lidt anderledes en de tidligere år. Vi er i gang med at revidere kurset således at det er bedre integreret med HCI og giver et godt grundlag for jeres videre arbejde i bachelorprojekter og på jeres kandidatuddannelse. Dertil kommer at vi, pga. COVID, gennemføre kurset som fjernundervisning. Det betyder at der kan forekommer ændringer i kursusplanen for at imødekomme omstændighederne undervejs.    </p>
    <p>En note om kommunikation og infrastruktur i kurset. Vi bruger Blackboard til officielle beskeder, afleveringer og centrale informationer. Zoom bruges til undervisning og møder, Slack til ad hoc koordinering mm. Alle steder identificerer vi os med vores navne (og ikke au-id, gamer-tags, twitch id, twitter eller instagram handle). Vi forsøger så vidt muligt at etablere en lærings- og kommunikationskultur hvor I bruger hinanden til spørgsmål og øvelser på Slack og Zoom. Er der spørgsmål til planen, opgaver, grupper mm. så skriv på Slack, så kan enten Henrik eller en TA hjælpe. I er velkommen til at kontakte Henrik ift. yderligere spørgsmål som DM på Slack eller aftale tid til et kort møde hvis der er særlige udfordringer der skal addresseres. Kontortid (på zoom) fremgår af listen af undervisere nedenfor.   </p>
    <p>Vi glæder os rigtig meget til at komme i gang! </p>   
    <p>- Henrik og resten af undervisningsteamet </p> `;
}
function otherInfoDisplayTools(){
    reset();
    container.innerHTML = `
    <h3>Værktøjer</h3>
    <p>I kurset bruger vi Blackboard til formelle afleveringer, Zoom til forelæsninger, Slack til koordingering og ad hoc kommunikation, AU Gitlab til projekt dokumentation, sprints og backlogs, kode mm. </p>
    `;
} 
function otherInfoDisplayGroups(){
    reset();
    container.innerHTML = `
    <h3>Grupper</h3>
    Her kan du tilmelde dig en gruppe
    <button onclick="alert('You have signed up for a group')">Sign Up for a random group</button>
    `;

}
function otherInfoDisplayExam(){
    reset();
    container.innerHTML = `
    <h3>Eksamen</h3>
    <p>Information kommer senere</p>
    `;

}
function otherInfoDisplayContacts(){
    reset();
    container.innerHTML = `
    <h3>Kontakt</h3>
    <p>Underviseren i dette kursus er Bobby Brandsen. Kontakt ham i kontor 204 eller ved email: <a href="mailto: bobby@bobby.com">bobby@bobby.com</a></p>
    <p>TA's er Sabrina Jade og Kevin Koda, men har ingen kontakt information</p>
    `;
}
function otherInfoDisplayEvaluation(){
    reset();
    container.innerHTML = `
    <h3>Evaluering</h3>
    Hvad vil du give vores kursus?<br>
    <input type="radio" name="rating">1<br>
    <input type="radio" name="rating">2<br>
    <input type="radio" name="rating">3<br>
    <input type="radio" name="rating">4<br>
    <input type="radio" name="rating">5<br>

    Hvad kan vi gøre bedre?<br>
    <input type="text"><br>

    <input type="submit">
    `;
}
