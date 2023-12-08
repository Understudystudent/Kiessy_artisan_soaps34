document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify(
        [{
                "id": 1,
                "name": "Luxury Artisan Handmade Soaps",
                "make": " Lavender fields ",
                "amount": 55,
                "img": "https://i.postimg.cc/28QgBc5r/ed929619-a18f-484e-9543-6b401a5df5c5.jpg",
            },
            {
                "id": 2,
                "name": "Luxury Artisan Handmade Soaps",
                "make": "Espresso aroma ",
                "amount": 45,
                "img": "https://i.postimg.cc/MKnv6BZ7/97222de9-ff18-487e-a3d4-6b67901dc366.jpg",
            },
            {
                "id": 3,
                "name": "Luxury Artisan Handmade Soaps",
                "make": "Beaumont Allure",
                "amount": 70,
                "img": "https://i.postimg.cc/v830RJD1/bd5b3354-1884-4590-8e35-a38694c0802c.jpg",
            },
            {
                "id": 4,
                "name": "Luxury Artisan Handmade Soaps",
                "make": "Jasmine Blossom ",
                "amount": 50,
                "img": "https://i.postimg.cc/gcXDxNDj/a6d62e2e-beef-45fb-a1cf-cd0f4a3913c3.jpg",
            },
            {
                "id": 5,
                "name": "Luxury Artisan Handmade Soaps",
                "make": " Milk-way Express ",
                "amount": 80,
                "img": "https://i.postimg.cc/7LWRZvwr/photo-1607006411601-775c8cc632dc-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
            },
            {
                "id": 6,
                "name": " Luxury Artisan Handmade Soaps",
                "make": "Couple love",
                "amount": 120,
                "img": "https://i.postimg.cc/CxRZBsXn/s-l1200.jpg",
            },
            {
                "id": 7,
                "name": "Luxury Artisan Handmade Soaps",
                "make": "Lemon-grass ",
                "amount": 80,
                "img": "https://i.postimg.cc/PT7KKXQh/7-cc45b47e-d917-45c5-8957-387f24ad8c3d-1080x.jpg",
            },
            {
                "id": 8,
                "name": " Luxury Artisan Handmade Soaps",
                "make": "Pomegranate",
                "amount": 80,
                "img": "https://i.postimg.cc/FzRNRcxs/5-cfe20186-e3d1-446d-bf80-61e5e8564131-1080x.jpg",
            }

        ]
    ));

// Display Products to HTML
let productGrid = document.querySelector('[data-productCard]');
// Search Products to HTML
let searchProducts = document.querySelector('[data-search-product]')
// Sort by price
let sortPrice = document.querySelector('[data-sort-product]')
// checkout storage Key
let checkout = JSON.parse(localStorage.getItem('checkout')) ? JSON.parse(localStorage.getItem('checkout')) : [];

function showProducts() {
    productGrid.innerHTML = ""
    if (products) {
        // loop through the product in array

        products.forEach((product, index) => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
            <div class="card my-3 mx-3">
            <img src="${product.img}" class="card-img-top text-center" style="height: 300px; object-fit: cover;"></img>
                <div class="card-body">
                    <h5 class="card-title text-center">${product.make}</h5>
                    <p class="card-text text-center">${product.name}</p>
                    <p class="card-text text-center">R${product.amount}.00</p>
                    <a href="#" class="btn btn-dark d-flex justify-content-center" addToCartBtn="${index}">Add to Cart</a>
                </div>
            </div>
            `;
        });

        // Initialize an array to product store
        let addToCartBtns = document.querySelectorAll(`[addToCartBtn]`);

        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                let product = products[btn.getAttribute('addToCartBtn')];
                checkout.push(product);
                // Save the updated checkout to localStorage
                localStorage.setItem('checkout', JSON.stringify(checkout));
            });
        });
    }
    // Display Spinner
    else {
        productGrid.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div><p>Please Refresh the page</p></div>
      </div>`;
    }
}

// Call the function to display products
showProducts();

// Search Products
searchProducts.addEventListener('keyup', () => {
    try {
        let searchItem = products.filter(prod => {
            return prod.make.toLowerCase().includes(searchProducts.value.toLowerCase());
        });

        if (searchItem.length > 0) {
            productGrid.innerHTML = "";
            searchItem.forEach(item => {
                productGrid.innerHTML += `
                <div class="card my-3 mx-3">
                        <img src="${item.img}" class="card-img-top" style="height: 300px; object-fit: cover;"></img>
                        <div class="card-body">
                            <h5 class="card-title text-center">${item.make}</h5>
                            <p class="card-text text-center">${item.name}</p>
                            <p class="card-text text-center">R${item.amount}.00</p>
                            <a href="#" class="btn btn-dark d-flex justify-content-center">Add to Cart</a>
                            </div>
                    </div>
                `;
            });
        } // Display Spinner
        else {
            productGrid.innerHTML = `<div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
            <div><h2>No Matching products are found</h2></div>
          </div>`;
        }
    } //Display Spinner
    catch (error) {
        productGrid.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div><h2>Prodcuts are found,Please Refrresh the page</h2></div>
      </div>`;
    }
});

//Sort Products
sortPrice.addEventListener('click', (event) => {
    event.preventDefault();
    try {
        if (!products) {
            throw "Apologies, Please Refresh the Page";
        }
        products.sort((a, b) => b.amount - a.amount);
        showProducts();
    }
    // Display Spinner
    catch (error) {
        productGrid.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div><h2>Prodcuts are found,Please Refrresh the page</h2></div>
      </div>`;
    }
});