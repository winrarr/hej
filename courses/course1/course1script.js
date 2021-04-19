document.addEventListener('DOMContentLoaded', setup, false);

function setup() {
    displayCoursePlan();
}

function displayCoursePlan() {
    console.log("hej");
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




