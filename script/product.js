document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products', JSON.stringify([
    {
        "name": "Lavender fields",
        "make": "Lavender",
        "amount": 45,
        "img": "<img src='https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg'>"
    }
]));

// Display Products to html
function displayProducts() {
    let productGrid = document.querySelector('[data-productCard]');
    productGrid.innerHTML = "";

    if (products) {
        // loop through array
        products.forEach((product) => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.amount}</p>
                    <button href="#" class="btn btn-dark">Add to Cart</button>
                </div>
            </div>
            `;
        });
    }
}

// Call the function to display products
displayProducts();
