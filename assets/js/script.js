/* =========================================
   Sprint 1 | Semester 2 | Oct 19th 2025
   Authors: Justin Seaward, Matt Reid, Christopher Britten
   ========================================= */

// loading shared header section

async function loadShared(section, file) {
  try {
    const res = await fetch(`/assets/shared/${file}`);

    //   error handling here

    if (!res.ok) throw new Error(`${file} not found`);
    const html = await res.text();
    document.querySelector(section).innerHTML = html;
  } catch (err) {
    console.error(`Error Loading ${file}:`, err);
  }
}

// ================================= DOM HERE =================
document.addEventListener("DOMContentLoaded", async () => {
  //this waits until the header laods all the way
  await loadShared("header", "header.html");

  if (typeof highlightActiveNav === "function") {
    highlightActiveNav(); // this will activate existing link
  }
  // loads footer here
  await loadShared("footer", "footer.html");
});

// Testimonial section

// Using Option 1 (object format)
function addToCart(itemId) {
  const item = menuItems[itemId];

  if (!item) {
    console.error(`Item ${itemId} not found in menu`);
    return;
  }

  // Get existing cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item exists
  const existingIndex = cart.findIndex((cartItem) => cartItem.id === itemId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: itemId,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add event listeners to all buttons
document.querySelectorAll("button[id]").forEach((button) => {
  button.addEventListener("click", function () {
    addToCart(this.id);
  });
});

//this would not work in another file for whatever reasons so throwing it here may work

// script.js

// Define menu items at the TOP of the file
const menuItems = {
  avotoastegg: { name: "Avocado Toast With Egg", price: 8.99 },
  croissant: { name: "Croissant", price: 6.99 },
  yogurt: { name: "Yogurt Parfait", price: 6.99 },
  omelet: { name: "Omelet", price: 11.99 },
  pancakes: { name: "Stack of Pancakes", price: 14.99 },
  burger: { name: "Double Cheese Burger", price: 9.99 },
  subsandwich: { name: "Veggie Sub", price: 6.99 },
  sandwichsalad: { name: "Sandwich & Salad", price: 8.99 },
  salad: { name: "Garden Salad", price: 12.99 },
  burger2: { name: "Simple Hamburger", price: 9.99 },
  dip: { name: "Spinach Dip", price: 8.99 },
  wings: { name: "Zinger Wings", price: 5.99 },
  spaghetti: { name: "Spaghetti", price: 15.99 },
  shrimp: { name: "Shrimp Gumbo w/ Rice", price: 15.99 },
  stake: { name: "Top Loin Steak", price: 15.99 },
  lasagna: { name: "Lasagna", price: 15.99 },
  lightroast: { name: "Light Roast Coffee", price: 1.99 },
  mediumroast: { name: "Medium Roast Coffee", price: 1.99 },
  darkroast: { name: "Dark Roast Coffee", price: 1.99 },
  speccoffee: { name: "Specialty Coffee", price: 2.49 },
  steeptea: { name: "Steep Tea", price: 1.49 },
  greentea: { name: "Green Tea", price: 1.79 },
  earlgraytea: { name: "Earl Gray Tea", price: 1.79 },
  spectea: { name: "Specialty Tea", price: 2.29 },
  water: { name: "Water", price: 0.99 },
  pepis: { name: "Pepsi", price: 1.99 },
  "7up": { name: "7 UP", price: 1.99 },
  coke: { name: "Coke", price: 1.99 },
  cokezero: { name: "Coke Zero", price: 1.99 },
  apple: { name: "Apple Juice", price: 1.99 },
  orange: { name: "Orange Juice", price: 1.99 },
  gaderade: { name: "Gatorade", price: 1.99 },
};

// Now your addToCart function
function addToCart(itemId) {
  const item = menuItems[itemId];

  if (!item) {
    console.error(`Item ${itemId} not found in menu`);
    return;
  }

  // Rest of your code...
}

// Rest of your script.js code...
