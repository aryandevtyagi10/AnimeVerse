document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const container = document.querySelector(".carousel-container");

    // Duplicate images for infinite scrolling effect
    carousel.innerHTML += carousel.innerHTML;

    let scrollAmount = 0;
    function scrollCarousel() {
        scrollAmount -= 2; // Adjust speed here
        if (scrollAmount <= -carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scrollCarousel);
    }

    // Set carousel width dynamically to prevent empty space
    function adjustCarouselWidth() {
        const images = document.querySelectorAll(".carousel img");
        const totalWidth = images.length * (images[0].offsetWidth + 20); // Adding margin
        carousel.style.width = `${totalWidth}px`;
    }

    adjustCarouselWidth();
    scrollCarousel();

    window.addEventListener("resize", adjustCarouselWidth);

    // Fix for wallpaper download issue
    document.querySelectorAll(".carousel img").forEach(img => {
        img.addEventListener("click", function () {
            const userResponse = confirm("Do you want to download this wallpaper?");
            if (userResponse) {
                const link = document.createElement("a");
                link.href = img.src;
                link.download = img.alt || "wallpaper";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    });
});
