document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products', JSON.stringify(
    [
    {
        "id":1,
        "name": "Lavender fields",
        "make": "Handmade Soap",
        "amount": 45,
        "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
    },
    {
        "id":2,
        "name": "Espresso aroma",
        "make": "Handmade Soap",
        "amount": 60,
        "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
    },
    {
        "id":3,
        "name": "Beaumont Allure",
        "make": "Handmade Soap",
        "amount": 70,
        "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
    },
    {
        "id":4,
        "name": "Jasmine Blossom",
        "make": "Handmade Soap",
        "amount": 45,
        "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
    },
    {
        "id":5,
        "name": "Milk-way Express",
        "make": "Handmade Soap",
        "amount": 80,
        "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
    }
]
));

let productGrid = document.querySelector('[data-productCard]');
let searchProducts = document.querySelector('[data-search-product]')

// Display Products to HTML
function displayProducts() {
    productGrid.innerHTML = ""
    if (products) {
        // loop through the product in array
        products.forEach(product => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.amount}</p>
                    <a href="#" class="btn btn-dark">Add to Cart</a>
                </div>
            </div>
            `;
        });
    } else {
        productGrid.innerHTML = "No products";
    }
}

// Call the function to display products
displayProducts();

// Searching Products
searchProducts.addEventListener('keyup',()=>{
   try{ let searchItem = products.filter( prod =>{
        return (prod.make.toLowerCase().includes(searchProducts.value.toLowerCase()))  
    })
    if (searchItem) {
        productGrid.innerHTML = "";
        searchItem.forEach(item=>{
            productGrid.innerHTML += `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.amount}</p>
                    <a href="#" class="btn btn-dark">Add to Cart</a>
                </div>
            </div>
            `
        })
    }else {
        displayProducts()
    }
}catch(e){
    console.log(e);
}

})