document.querySelector('#currentYear').textContent = new Date().getFullYear();

let products = JSON.parse(localStorage.getItem('products')) || [];
let tableContent = document.querySelector('[table-products]');
let adminProductSort = document.querySelector('[admin-product-sort]');

// edits the products
function editProduct(product){
  let soapName = document.querySelector('#soapName').value
  let typeSoap = document.querySelector('#typeSoap').value
  let soapPrice = document.querySelector('#soapPrice').value
  let soapImg = document.querySelector('#soapImg').value

  products[product].name = soapName;
  products[product].amount = soapPrice;
  products[product].img = soapImg;
  products[product].make = typeSoap;

  localStorage.setItem('products', JSON.stringify(products));

  tableContent.innerHTML = ''
  for( let product of products ){
    tableContent.innerHTML += `<tr>
    <td class="text-center">${product.make}</td>
    <td class="text-center my-4"><img src="${product.img}" alt="${product.make}" style="height: 100px; object-fit: cover; width: 100px;"></td>
    <td class="text-center">${product.name}</td>
    <td class="text-center" >${product.amount}.00</td>
    <td>
        <div> 
        <button class="btn btn-dark col-6" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i>Edit</button>

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
                    <label>${product.name}</label>
                    <input type="text" id="soapName" placeholder="Soap Name">
                    </div>
                </div>
                <img src="${product.img}" alt="${product.make}" style="height: 100px; object-fit: cover; width: 100px;">
                <div id="bottomBorder">
                    <label>URL:</label>
                    <input type="text" id="soapImg" placeholder="Soap Url">
                </div>
                <h4>${product.make}</h4>
                <div id="bottomBorder">
                    <label>Type</label>
                    <input type="text" id="typeSoap" placeholder="Soap Type">
                </div>
                <h4>${product.amount}</h4>
                <div id="bottomBorder">
                    <label>Price:</label>
                    <input type="number" id="soapPrice" placeholder="Soap Price">
                </div>
                </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary" onclick="editProduct(${product.id})">Save changes</button>
             </div>
           </div>
         </div>
       </div>




       <div class="modal fade text-center" id="ModalSoap" tabindex="-1">
       <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title text-center" id="ModalSoapLabel">New Soap</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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
             <button type="button" class="btn btn-dark" id="addRecord">Add Soap</button>
             <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
           </div>
         </div>
       </div>
     </div>
        

            <button class="btn btn-dark col-6 my-2" onclick="deleteProduct(${product.id})"><i class="bi bi-trash3-fill"></i>Delete</button>
        </div>
    </td>
</tr>
`
  }
}

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
                        <button class="btn btn-dark col-6" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i>Edit</button>

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
                                    <label>${product.name}</label>
                                    <input type="text" id="soapName" placeholder="Soap Name">
                                    </div>
                                </div>
                                <img src="${product.img}" alt="${product.make}" style="height: 100px; object-fit: cover; width: 100px;">
                                <div id="bottomBorder">
                                    <label>URL:</label>
                                    <input type="text" id="soapImg" placeholder="Soap Url">
                                </div>
                                <h4>${product.make}</h4>
                                <div id="bottomBorder">
                                    <label>Type</label>
                                    <input type="text" id="typeSoap" placeholder="Soap Type">
                                </div>
                                <h4>${product.amount}</h4>
                                <div id="bottomBorder">
                                    <label>Price:</label>
                                    <input type="number" id="soapPrice" placeholder="Soap Price">
                                </div>
                                </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                               <button type="button" class="btn btn-primary" onclick="editProduct(${product.id})">Save changes</button>
                             </div>
                           </div>
                         </div>
                       </div>




                       <div class="modal fade text-center" id="ModalSoap" tabindex="-1">
                       <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                         <div class="modal-content">
                           <div class="modal-header">
                             <h5 class="modal-title text-center" id="ModalSoapLabel">New Soap</h5>
                             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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
                             <button type="button" class="btn btn-dark" id="addRecord">Add Soap</button>
                             <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
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

// Edit Products
function updateProduct(itemIndex) {
  try {
      let products = JSON.parse(localStorage.getItem('products'));

      // Get values from the modal inputs
      let soapName = document.querySelector(`#soapName-${products.name}`).value;
      let soapMake = document.querySelector(`#typeSoap-${products.make}`).value;
      let soapPrice = document.querySelector(`#soapPrice-${products.amount}`).value;

      // Update products in the array
      products[itemIndex].name = soapName;
      products[itemIndex].spec = soapMake;
      products[itemIndex].price = soapPrice;
      
      // Save the updated products to localStorage
      localStorage.setItem('products', JSON.stringify(products));
      adminContent();
  }catch (error) {
    productGrid.innerHTML = `<div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
      <div><h2>Error has occurred. Please refresh the page</h2></div>
    </div>`;
  }
}adminContent()


document.querySelector('#ModalSoap').addEventListener('click', addNewProducts);
// pushProducts.addEventListener('click', addNewProducts);

// Delete Products
function deleteProduct(id) {
  try {
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
  } catch (error) {
    
    productGrid.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
  <div><h2>Error has occured,Please Refresh the page</h2></div>
</div>`
     
  
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

