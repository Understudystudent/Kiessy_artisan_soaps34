document.querySelector('#currentYear').textContent = new Date().getFullYear();

let cartItems = JSON.parse(localStorage.getItem('checkout')) || [];
let tableCheckout = document.querySelector('[checkoutTable]');

(function displayCartItems() {
    try {
        if (cartItems.length === 0) {
            throw "Please add items to the cart.";
        }

        let sortedItems = cartItems.sort((a, b) => a.id - b.id);
        let groupedItems = sortedItems.reduce((accumulator, currentItem) => {
            accumulator[currentItem.id] = accumulator[currentItem.id] || [];
            accumulator[currentItem.id].push(currentItem);
            return accumulator;
        }, {});

        let totalAmountDue = 0;

        for (let groupId in groupedItems) {
            let group = groupedItems[groupId];
            let totalAmount = group.length * group[0].amount;
            totalAmountDue += totalAmount;

            tableCheckout.innerHTML += `

            <table class="table">
             <thead>
             <tr>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Quainty</th>
                <th scope="col">Price</th>

             </tr>
            </thead>
            <tbody>
             <tr>
  <td>${group[0].img}</td>
  <td>${group[0].make}</td>
  <td>${group[0].name}</td>
  <td>${group[0].amount}</td>
  <td>${group.length}</td>
</tr>
  </tbody>
</table>

            `;
        }

        // Display amount after the loop
        tableCheckout.innerHTML += `
            <tr class="amount due">
                <td></td>
                <td></td>
                <td></td>
                <td>Amount Due:</td>
                <td>R
                ${totalAmountDue}</td>
            </tr>
        `;
    } catch (error) {
        // Clear the table in case of an error
        tableCheckout.innerHTML = '';
        tableCheckout.style.fontSize = '3rem';
    }
})();