document.addEventListener('DOMContentLoaded', setup, false);

function setup() {
    displayCoursePlan();
}

function displayCoursePlan() {
    let coursecontent = document.getElementById("content-table");
    
    for (let row = 0; row < 20; row++) { //this is rows! change later!
        let trow = document.createElement('tr');
        //Day
        let day = document.createElement('td');
        day.innerHTML = row;
        //Lecture
        let lecture = document.createElement('td');
        lecture.innerHTML = row;
        //Literature
        let literature = document.createElement('td');
        literature.innerHTML = row;
        //Slides
        let slides = document.createElement('td');
        slides.innerHTML = row;
        //Videos
        let videos = document.createElement('td');
        videos.innerHTML = row;
        //Exercises
        let exercises = document.createElement('td');
        exercises.innerHTML = row;
        //Assignments
        let assignments = document.createElement('td');
        assignments.innerHTML = "none!";
    
        coursecontent.appendChild(trow);
    }
}




