document.addEventListener('DOMContentLoaded', function() {
    let calendar = document.getElementById("calendar");
    let currentDay = calendar.children[new Date().getDay()];
    currentDay.className = "calendar-table-row-header-today";
    for (let i = 0; i < 8*24; i++) {
        var element = document.createElement("div");
        if (i % 8 == 0) {
            let time = i / 8;
            element.innerHTML = ("0" + time).slice(-2) + " - " + ("0" + (time+1)).slice(-2);
            element.classList.add("calendar-table-header");
        } else {
            element.innerHTML = "&nbsp;";
            element.classList.add("calendar-table-item");
        }
        calendar.appendChild(element);
    }
}, false);

function previousWeek() {
    alert("Sidste uge :D");
}

function nextWeek() {
    alert("Næste uge :D");
}