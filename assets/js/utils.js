// highlight helper or handler

function highlightActiveNav() {
  //here the current page will be targeted
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  //finding all links in header to pick which is actice and which is not

  document.querySelectorAll("header a.nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active"); // this will highlight the selected link
      link.setAttribute("aria-current", "page");
      //for accessibiliy
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}
// utils.js

// Function to clear all items from the shopping cart
function clearCart() {
  // Show confirmation dialog to prevent accidental deletion
  if (confirm("Are you sure you want to clear your cart?")) {
    // Remove cart data from localStorage
    localStorage.removeItem("cart");

    // Refresh the page to update the display
    location.reload();
  }
}

// You can add other utility functions here
// For example:

// Function to format currency
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

// Function to get cart item count
function getCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((total, item) => total + item.quantity, 0);
}
