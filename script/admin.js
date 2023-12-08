document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) || [];
let tableContent = document.querySelector('[table-products]');
let adminProductSort = document.querySelector('[admin-product-sort]');



// Getting the item from product to admin
function adminContent() {
    try {
        // let products = JSON.parse(localStorage.getItem('products'));
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
                        <button class="btn btn-dark col-6" data-toggle="modal" data-target="#updateProduct" onclick="editProduct(${product.id})"><i class="bi bi-pencil-square"></i>Edit</button>

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

                        

                            <button class="btn btn-dark col-6 my-2" onclick="deleteProduct(${product.id})"><i class="bi bi-trash3-fill"></i>Delete</button>
                        </div>
                    </td>
                </tr>
            `;
        });
    } catch (e) {
        tableCheckout.innerHTML = `<div class="text-center">
        <div class="spinner-border text-center" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="text-center"><p>Erro</p></div>
      </div>`
    }
}

// Call the adminContent function to display products in the table
adminContent();

// Adding Products
function addNewProducts() {
    try {
        let item = {
            id: products.length + 1,
            name: document.querySelector('#soapName').value,
            make: document.querySelector('#typeSoap').value,
            amount: document.querySelector('#soapPrice').value,
            img: document.querySelector('#soapImg').value,
        };

        if (!item.name || !item.make || !item.amount || !item.img) {
            throw new Error('Empty fileds please refresh the page');
        }

        // Adding items into array and saving it
        products.push(item);
        localStorage.setItem('products', JSON.stringify(products));
        adminContent();
    } catch (error) {
        tableCheckout.innerHTML = `<div class="text-center">
        <div class="spinner-border text-center" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="text-center"><p>A error has occuried, please refresh the page</p></div>
      </div>`
    }
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

//Sort Products
adminProductSort.addEventListener('click', () => {
    try {
        if (!products) {
            throw "Apologies, Please Refresh the Page";
        }
        products.sort((a, b) => b.amount - a.amount);
        adminContent();
    }
    // Display Spinner
    catch (error) {
        productGrid.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div><h2>Products are not found,Please Refresh the page</h2></div>
      </div>`;
    }
});

// Edit Products

function editProduct() {
    try {
        let item = {
            id: products.length + 1,
            name: document.querySelector('#soapName').value,
            make: document.querySelector('#typeSoap').value,
            amount: document.querySelector('#soapPrice').value,
            img: document.querySelector('#soapImg').value,
        };

        if (!item.name || !item.make || !item.amount || !item.img) {
            throw new Error('Empty fileds please refresh the page');
        }

        // Adding items into array and saving it
        products.push(item);
        localStorage.setItem('products', JSON.stringify(products));
        adminContent();
    } catch (error) {
        tableCheckout.innerHTML = `<div class="text-center">
        <div class="spinner-border text-center" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="text-center"><p>A error has occuried, please refresh the page</p></div>
      </div>`
    }
}

document.querySelector('#ModalSoap').addEventListener('click', addNewProducts);
// pushProducts.addEventListener('click', addNewProducts);
