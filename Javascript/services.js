document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
    this.reset(); // Reset form fields after submission
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.splide').forEach(slider => {
        let sliderId = slider.getAttribute('data-slider');

        // Initialize Splide directly on the slider element
        let splideInstance = new Splide(slider, {
            type: 'loop',
            rewind: true,
            autoplay: true,
            interval: 3000,
            perPage: 1,
        }).mount();

        // Thumbnail Click Functionality
        const thumbnails = document.querySelectorAll(`.thumbnail[data-slider="${sliderId}"]`);
        
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                splideInstance.go(index); // Move slider to clicked thumbnail
                thumbnails.forEach(t => t.classList.remove('active')); // Remove active class from all
                thumb.classList.add('active'); // Add active class to clicked thumbnail
            });
        });
    });
});


//     // Thumbnail Click Functionality
//     const thumbnails = document.querySelectorAll('.thumbnail[data-slider="${sliderId}"]');
    
//     thumbnails.forEach((thumb, index) => {
//         thumb.addEventListener('click', () => {
//             splide.go(index);
//             thumbnails.forEach(t => t.classList.remove('active'));
//             thumb.classList.add('active');
//         });
//     });
// });