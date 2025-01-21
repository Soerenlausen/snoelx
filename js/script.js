const scrollableGallery = document.querySelector('.scrollable-gallery');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

let scrollAmount = 450; // Amount to scroll each time

scrollLeftBtn.addEventListener('click', () => {
    scrollableGallery.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: 'smooth' // Smooth scrolling
    });
});

scrollRightBtn.addEventListener('click', () => {
    scrollableGallery.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth' // Smooth scrolling
    });
});



// Array of image paths
const images = [
    'img/HENRY18.11.24.png',
    'img/HENRY love or lost.jpg',
    'img/mysweetboycoverart2.png',
    'img/mysweetboycoverart3.png',
    'img/HENRY poster plain3.9.2.2.png',
    'img/PLAYING GAMES.png'
];

let currentIndex = 0; // Start with the first image

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the displayed image
function updateImage() {
    galleryImage.src = images[currentIndex];
}

// Event listener for the "Back" button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop to the last image
    updateImage();
});

// Event listener for the "Forward" button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop to the first image
    updateImage();
});

// Initialize the gallery with the first image
updateImage();



const scrollableGallery2 = document.querySelector('.clothes');
const scrollLeftBtn2 = document.getElementById('scrollLeftBtn2');
const scrollRightBtn2 = document.getElementById('scrollRightBtn2');

let scrollAmount2 = 450; // Amount to scroll each time

scrollLeftBtn2.addEventListener('click', () => {
    scrollableGallery2.scrollBy({
        top: 0,
        left: -scrollAmount2,
        behavior: 'smooth' // Smooth scrolling
    });
});

scrollRightBtn2.addEventListener('click', () => {
    scrollableGallery2.scrollBy({
        top: 0,
        left: scrollAmount2,
        behavior: 'smooth' // Smooth scrolling
    });
});