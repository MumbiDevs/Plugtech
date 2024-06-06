document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector("#next");
    const prev = document.querySelector("#prev");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    showSlide(currentIndex);

    // Automatic slide
    setInterval(nextSlide, 5000);
});
