const images = document.querySelectorAll(".carousel img");
    let index = 0;
    let interval;

    function showImage(i) {
        images.forEach((img, idx) => {
            img.classList.toggle("active", idx === i);
        });
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    document.getElementById("next").onclick = nextImage;
    document.getElementById("prev").onclick = prevImage;

    // Auto slide every 3 seconds
    function startSlide() {
        interval = setInterval(nextImage, 3000);
    }

    function stopSlide() {
        clearInterval(interval);
    }

    // Pause on hover
    const carousel = document.getElementById("carousel");
    carousel.addEventListener("mouseenter", stopSlide);
    carousel.addEventListener("mouseleave", startSlide);

    startSlide();
