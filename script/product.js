document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products', JSON.stringify(
    [
        {
            "name": "Lavender fields",
            "make": "Lavender",
            "amount": 45,
            "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg"
        }
    ]
))

// Display Products
function displayProducts() {
    let productGrid = document.querySelector('[data-productCard]'); 
    productGrid.innerHTML = "";

    if (products) {
        products.forEach((item) => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
                <div class="card-header">${item.name}</div>
                <div class="card-header">${item.make}</div>
                <div class="card-header">${item.amount}</div>
                <div class="card-header">${item.img}</div>
            `;
        });
    }
}

// Call the function to display products
displayProducts();
