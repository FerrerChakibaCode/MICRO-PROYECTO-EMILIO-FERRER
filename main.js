const carousel = document.querySelector(".carousel-imgs")
const images = document.querySelectorAll(".carousel-imgs img");
console.log(images)

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

let counter = 0;
const size = 600;
// carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', function(event){
    counter++;
    if (counter > images.length - 1) {
        counter = 0
    }
    carousel.style.transform = 'translateX(' + counter *(-size) + 'px)';
    console.log(counter);
})

prevButton.addEventListener('click', function(event){
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
        console.log(counter);
        carousel.style.transform = 'translateX(' + counter *(-size) + 'px)';
    } else {
        carousel.style.transform = 'translateX(' + counter * -size + 'px)'; 
        console.log(counter);
    }

})