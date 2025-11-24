 const products = [
      { name: "Laptop", category: "electronics" },
      { name: "Smartphone", category: "electronics" },
      { name: "Headphones", category: "electronics" },
      { name: "T-Shirt", category: "clothing" },
      { name: "Jeans", category: "clothing" },
      { name: "Jacket", category: "clothing" },
      { name: "Book - JavaScript Guide", category: "books" },
      { name: "Book - HTML Basics", category: "books" },
      { name: "Smartwatch", category: "electronics" },
      { name: "Hoodie", category: "clothing" }
    ];

    // Function to display products
    function displayProducts(list) {
      const container = document.getElementById("products");
      container.innerHTML = ""; // clear old displayed items

      list.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} (${item.category})`;
        container.appendChild(div);
      });
    }

    // Filter by category
    function filterProducts(category) {
      const searchText = document.getElementById("searchBox").value.toLowerCase();

      let filtered = products.filter(item =>
        (category === "all" || item.category === category) &&
        item.name.toLowerCase().includes(searchText)
      );

      displayProducts(filtered);
    }

    // BONUS: Live Search
    document.getElementById("searchBox").addEventListener("input", () => {
      filterProducts("all"); // re-filter based on search
    });

    // Show all products initially
    displayProducts(products);