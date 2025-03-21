document.addEventListener('DOMContentLoaded', () => {
    const album = document.getElementById('album');

    // Love quotes
    const quotes = [
        "Love is the bridge between two hearts.",
        "Every love story is beautiful, but ours is my favorite.",
        "You are my sun, my moon, and all of my stars.",
        // ... (add more quotes as needed)
        "Together, we shine brighter.",
        "Your love is my happiness.",
        "You are the love of my life."
    ];

    // Dynamically add images and quotes to the album
    const totalImages = 33;
  for (let i = 1; i <= totalImages; i++) {
    const pageContent = `
      <div class="page">
        <img src="images/pic${i}.jpg" alt="Memory ${i}" onerror="this.src='images/placeholder.jpg'; this.alt='Placeholder'">
      </div>
    `;
    $(album).turn('addPage', $(pageContent), i + 1); // Add pages after the cover
  }

    // Add Cover Page
   /* const coverPage = `
        <div class="page hard">
            <div class="cover-content">
                <h2>Adam & Lubna</h2>
                <p>A Journey of Love</p>
            </div>
        </div>
    `;
    album.innerHTML += coverPage;

    // Add Back Cover Page
    const backCoverPage = `
        <div class="page hard">
            <div class="cover-content">
                <h2>Made with ❤️</h2>
            </div>
        </div>
    `;
    album.innerHTML += backCoverPage;
*/
    // Get the viewport width and calculate responsive dimensions
    const viewportWidth = window.innerWidth;
    let albumWidth = 800; // Default width
    let albumHeight = 600; // Default height

    if (viewportWidth <= 768) {
        albumWidth = 600; // Adjust width for tablets
        albumHeight = 400; // Adjust height for tablets
    }

    if (viewportWidth <= 480) {
        albumWidth = 400; // Adjust width for phones
        albumHeight = 300; // Adjust height for phones
    }

    // Initialize the flipbook
    $(album).turn({
        width: albumWidth,
        height: albumHeight,
        autoCenter: true,
        elevation: 50,
        gradients: true,
        duration: 1000,
        acceleration: true,
        pages: totalImages + 2, // Total number of pages (cover, photos, back cover)
    });

    // Play background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
});