document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) || [];
let tableContent = document.querySelector('[table-products]');
let adminProductSort = document.querySelector('[admin-product-sort]');



// Getting the item from product to admin
function adminContent() {
    try {
        let products = JSON.parse(localStorage.getItem('products'));
        tableContent.innerHTML = "";
        products.forEach((product, i) => {
            tableContent.innerHTML += `
                <tr>
                    <td class="text-center">${product.make}</td>
                    <td class="text-center my-4"><img src="${product.img}" alt="${product.make}" style="height: 100px; object-fit: cover; width: 100px;"></td>
                    <td class="text-center">${product.name}</td>
                    <td class="text-center" >${product.amount}.00</td>
                    <td>
                        <div> 
                        <button class="btn btn-dark" data-toggle="modal" data-target="#updateProduct" onclick="editProduct(${product.id})"><i class="bi bi-pencil-square"></i>Edit</button>

                         <!-- Modal -->
                          <div class="modal fade" id="updateProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="updateProduct">Update Products</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form>
                            <div class="form-group">
                                <label for="${product.name}">Product Name</label>
                                <input type="text" class="form-control" id="${product.name}" placeholder="Enter product name">
                            </div>
                            <div class="form-group">
                                <label for="${product.amount}">Product Price</label>
                                <input type="text" class="form-control" id="${product.amount}" placeholder="Enter product price">
                            </div>
                            <div class="form-group">
                                <label for="${product.make}">Product Make</label>
                                <input type="text" class="form-control" id="${product.make}" placeholder="Enter product make">
                            </div>
                            <input type="hidden" id="updateProduct" value="">
                        </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                             </div>
                             </div>

                        

                            <button class="btn btn-dark" onclick="deleteProduct(${product.id})"><i class="bi bi-trash3-fill"></i>Delete</button>
                        </div>
                    </td>
                </tr>
            `;
        });
    } catch (e) {
        console.error(e);
    }
}

// Call the adminContent function to display products in the table
adminContent();

// Adding Products
function addNewProducts() {
    let item = {
        id: products.length + 1,
        name: document.querySelector('#soapName').value,
        make: document.querySelector('#typeSoap').value,
        amount: document.querySelector('#soapPrice').value,
        img: document.querySelector('#soapImg').value,
    };
    // adding itemts into array
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    adminContent();
}

// Delete Products
function deleteProduct(id) {
    let index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        adminContent();
    } else {
        productGrid.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div><p>Products not found</p></div>
      </div>`;
    }
}

// Edit Products
function editAdd(){
    let newProp = JSON.parse(localStorage.getItem('land'));
    let newland = newProp.find(edt => edt.id -1 === ids)
    let region = document.querySelector('#region2').value;
    let neighbour = document.querySelector('#nhood2').value;
    let street = document.querySelector('#street2').value;
    let image = document.querySelector('#urlimg2').value;
    let beds = document.querySelector('#bedNumb2').value;
    let baths = document.querySelector('#bathNumb2').value;
    let price = document.querySelector('#price2').value;
    let landsize = document.querySelector('#landsize2').value;

    newland.address.region = region;
    newland.address.neighbourhood = neighbour;
    newland.address.street = street;
    newland.image = image;
    newland.rooms.bedrooms = beds;
    newland.rooms.bathrooms = baths;
    newland.price = price;
    newland.size = landsize;

    properties[ids] = newland;
    localStorage.setItem('land',JSON.stringify(properties));
    loadData(properties);
}

//Sort Products
adminProductSort.addEventListener('click', (event) => {
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
        <div><h2>Procduts are found,Please Refrresh the page</h2></div>
      </div>`;
    }
});


document.querySelector('#ModalSoap').addEventListener('click', addNewProducts);
// pushProducts.addEventListener('click', addNewProducts);
