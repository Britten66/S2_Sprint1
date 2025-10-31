// Load cart data when page loads
window.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

function loadCart() {
  // Get cart from localStorage Here
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // keeping this empty

  const cartTableBody = document.querySelector("#cartTable tbody");

  // Clear existing rows
  cartTableBody.innerHTML = "";

  let grandTotal = 0;

  // Loop through cart items and create table rows
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${itemTotal.toFixed(2)}</td>
    `;

    cartTableBody.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="3"><strong>Grand Total</strong></td>
    <td><strong>$${grandTotal.toFixed(2)}</strong></td>
  `;
  cartTableBody.appendChild(totalRow);
}
