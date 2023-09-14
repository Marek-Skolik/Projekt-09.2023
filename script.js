const carousel = document.querySelector('#myCarousel');
const prevButton = document.querySelector('.control-prev');
const nextButton = document.querySelector('.control-next');
const downloadButton = document.querySelector('.download');

let imageIndexes = [0, 1, 2, 3];
let activeIndex = 0;

function moveCarouselLeft() {
    if (activeIndex > 0) {
        activeIndex--;
        updateCarousel();
    }
}

function moveCarouselRight() {
    if (activeIndex < 3) {
        activeIndex++;
        updateCarousel();
    }
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        const newIndex = (activeIndex + index) % 4;
        item.style.order = imageIndexes[newIndex];
    });
}

prevButton.addEventListener('click', function(event) {
    moveCarouselLeft();
    event.preventDefault(); 
});

nextButton.addEventListener('click', function(event) {
    moveCarouselRight();
    event.preventDefault(); 
});

downloadButton.addEventListener('click',function(event) {
    event.preventDefault();
})