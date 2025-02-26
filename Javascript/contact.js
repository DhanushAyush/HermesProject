document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".lead-form");
    const thankYouMessage = document.querySelector(".thank-you-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Hide form and show thank-you message
        form.style.display = "none";
        thankYouMessage.style.display = "block";
    });
});