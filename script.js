function displaybox() {
    var e = document.getElementById("box"),
        l = document.getElementById("openclick");
    e.classList.remove("block-none"), e.classList.add("block-display"), l.classList.add("block-none"), l.classList.remove("block-display")
}

function nonebox() {
    var e = document.getElementById("box"),
        l = document.getElementById("openclick");
    e.classList.remove("block-display"), e.classList.add("block-none"), l.classList.add("block-display"), l.classList.add("block-none")
}

function plusSlides(e) {
    showSlides(slideIndex += e)
}

function currentSlide(e) {
    showSlides(slideIndex = e)
}

function showSlides(e) {
    var l, s = document.getElementsByClassName("Slides");
    for (e > s.length && (slideIndex = 1), 1 > e && (slideIndex = s.length), l = 0; l < s.length; l++) s[l].style.display = "none";
    s[slideIndex - 1].style.display = "block"
}

function selectDate() {
    element.classList.contains("block_lavender") ? (element.classList.toggle("block_lavender"), element.classList.add("block_lime")) : element.classList.contains("block_lime") && (element.classList.toggle("block_lime"), element.classList.add("block_lavender"))
}
var slideIndex = 1;
showSlides(slideIndex);
var element = document.getElementById("block");