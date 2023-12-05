document.querySelector('#currentYear').textContent = new Date().getFullYear();

let tableContent = document.querySelector('[table-products]');

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
                            <button onclick="editProduct(${product.id})">Edit</button>
                            <button onclick="deleteProduct(${product.id})">Delete</button>
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
