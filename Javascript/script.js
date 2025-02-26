document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
    });

    splide.mount();

    // Thumbnail Click Functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            splide.go(index);
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {


//     // Initialize Second Splide Slider (Sponsor Carousel)
//     var sponsorCarousel = new Splide("#Sponsor-carousel", {
//         type: "loop",
//         perPage: 1, // Show 3 logos at a time
//         autoplay: true,
//         interval: 2000,
//         gap: "20px", // Space between slides
//         breakpoints: {
//             768: { perPage: 2 }, // On tablets, show 2
//             480: { perPage: 1 }, // On mobiles, show 1
//         },
//     });
//     sponsorCarousel.mount();
// });

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
    this.reset(); // Reset form fields after submission
});

document.addEventListener("DOMContentLoaded", function () {


    // Initialize Second Splide Slider (Sponsor Carousel)
    var sponsorCarousel = new Splide("#Sponsor-carousel", {
        type: "loop",
        perPage: 1, // Show 3 logos at a time
        autoplay: true,
        interval: 2000,
        gap: "20px", // Space between slides
        breakpoints: {
            768: { perPage: 2 }, // On tablets, show 2
            480: { perPage: 1 }, // On mobiles, show 1
        },
    });
    sponsorCarousel.mount();
});



// document.addEventListener('DOMContentLoaded', function () {
//     var splide = new Splide('#main-slider2', {
//         type: 'loop',
//         rewind: true,
//         autoplay: true, // Optional: Enables automatic sliding
//         interval: 3000, // Optional: Changes slide every 3 seconds
//         perPage: 1,
//     });

//     splide.mount();

//     // Thumbnail Click Functionality
//     const thumbnails = document.querySelectorAll('.thumbnails'); // Fixed class name
    
//     thumbnails.forEach((thumb, index) => {
//         thumb.addEventListener('click', () => {
//             splide.go(index);
//             thumbnails.forEach(t => t.classList.remove('active'));
//             thumb.classList.add('active');
//         });
//     });
// });

