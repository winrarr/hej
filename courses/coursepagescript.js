document.addEventListener('DOMContentLoaded', setup, false);
var hightlightedbutton;

function setup() {
    hightlightedbutton = document.getElementById("default");
    highlight(hightlightedbutton);
}

function highlight(el) {
    hightlightedbutton.className = "";
    el.className = "highlighted";
    hightlightedbutton = el;
}