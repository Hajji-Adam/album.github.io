document.addEventListener('DOMContentLoaded', () => {
    const album = document.getElementById('album');

    // Add Cover Page
    const coverPage = `
        <div class="page hard">
            <h2>Adam & Lubna</h2>
            <p>A Journey of Love</p>
        </div>
    `;
    $(album).append(coverPage);

    // Dynamically add images and quotes to the album
    const totalImages = 38;
    for (let i = 1; i <= totalImages; i++) {
        const pageContent = `
            <div class="page">
                <img src="images/pic${i}.jpg" alt="Photo ${i}">
                <p class="quote">Quote for photo ${i}</p>
            </div>
        `;
        $(album).append(pageContent);
    }

    // Add Back Cover Page
    const backCoverPage = `
        <div class="page hard">
            <h2>Made with ❤️</h2>
        </div>
    `;
    $(album).append(backCoverPage);

    // Initialize Turn.js after all pages are added
    $(album).turn({
        width: 800,
        height: 600,
        autoCenter: true,
        elevation: 50,
        gradients: true,
        duration: 1000,
        acceleration: true,
        pages: totalImages + 2, // Total number of pages (cover, photos, back cover)
    });

    // Play background music
    function playSound() {
        var audio = document.getElementById("sound");
        audio.play().catch(function(error) {
            console.error("Error attempting to play", error);
        });
    }
});