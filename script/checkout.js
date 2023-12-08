document.querySelector('#currentYear').textContent = new Date().getFullYear();

let cartItems = JSON.parse(localStorage.getItem('checkout')) || [];
let tableCheckout = document.querySelector('[checkoutTable]');

function displayCartItems() {
    try {
        if (cartItems.length === 0) {
            throw "Please add items to the cart.";
        }
        

        let sortedItems = cartItems.sort((a, b) => a.id - b.id);
        let itemQuantities = sortedItems.reduce((previousItem, currentItem) => {
            previousItem[currentItem.id] = previousItem[currentItem.id] || [];
            previousItem[currentItem.id].push(currentItem);
            return previousItem;
        }, {});

        // Calculate Total Amount in loop
        let totalAmountDue = 0;

        for (let itemId in itemQuantities) {
            let itemGroup = itemQuantities[itemId];
            let itemTotalAmount = itemGroup.length * itemGroup[0].amount;
            totalAmountDue += itemTotalAmount;

            // Display Product
            tableCheckout.innerHTML += `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Make</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <img src="${itemGroup[0].img}" class='img-fluid w-25 h-25'  alt='${itemGroup[0].name}'>
                        </td>
                        <td>${itemGroup[0].make}</td>
                        <td>${itemGroup[0].name}</td>
                        <td>${itemGroup.length}</td>
                        <td>${itemGroup[0].amount}</td>

                    </tr>
                </tbody>
            </table>
            `;
        }

        // Display total amount after the loop
        tableCheckout.innerHTML += `
            <tr class="amount due">
                <td></td>
                <td></td>
                <td></td>
                <td>Amount Due:</td>
                <td>R${totalAmountDue}</td>
            </tr>
        `;
    } catch (error) {
        // Display if Cart is empty
        tableCheckout.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="text-center"><p>Your Cart is empty, please add items</p></div>
      </div>`
    }
};

displayCartItems()


//Purchase Btn
let purchaseBtn = document.querySelector('[data-purchase-btn]');
function clickPurchaseBtn() {
    alert("Thank you for purchase?");
}
purchaseBtn.addEventListener('click', clickPurchaseBtn);
