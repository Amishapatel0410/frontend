const API_KEY = "YOUR_ACCESS_KEY"; 
    const gallery = document.getElementById("gallery");

   
    async function fetchImages() {
      const url = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;
      const response = await fetch(url);
      return response.json(); 
    }

  
    async function loadImages() {
      try {
        const images = await fetchImages();

        images.forEach(imgData => {
          const img = document.createElement("img");
          img.src = imgData.urls.small;

        
          img.onload = () => {
            img.classList.add("loaded");
          };

          gallery.appendChild(img);
        });

      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    
    loadImages();