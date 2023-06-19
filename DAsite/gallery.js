let slideIndex = 1;
showSlide(slideIndex);

function showSlide(x){
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (x > slides.length) {
        slideIndex = 1;
    }
    if (x < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}   

function plusSlide(x) {
    showSlide(slideIndex += x);
}

function thisSlide(x) {
    showSlide(slideIndex = x);
}