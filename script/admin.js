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
                        <button class="btn btn-dark col-6" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editProduct(${product.id})"><i class="bi bi-pencil-square"></i>Edit</button>

                         <!-- Modal -->
                         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Soap</h1>
                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-body">
                                <h4>Name</h4>
                                <div id="bottomBorder">
                                    <div>
                                    <label>Name:</label>
                                    <input type="text" id="soapName" placeholder="Soap Name">
                                    </div>
                                </div>
                                <h4>Image</h4>
                                <div id="bottomBorder">
                                    <label>URL:</label>
                                    <input type="text" id="soapImg" placeholder="Soap Url">
                                </div>
                                <h4>Type</h4>
                                <div id="bottomBorder">
                                    <label>Type</label>
                                    <input type="text" id="typeSoap" placeholder="Soap Type">
                                </div>
                                <h4>Price</h4>
                                <div id="bottomBorder">
                                    <label>Price:</label>
                                    <input type="number" id="soapPrice" placeholder="Soap Price">
                                </div>
                                </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
        <div class="text-center"><p>Error</p></div>
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
document.querySelector('#ModalSoap').addEventListener('click', addNewProducts);
pushProducts.addEventListener('click', addNewProducts);

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
