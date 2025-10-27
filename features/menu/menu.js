// const menu = {
//   // Breakfast items
//   avotoastegg: { name: "Avocado Toast w/ Egg", price: 8.99 },
//   croissant: { name: "Croissant", price: 6.99 },
//   yogurt: { name: "Yogurt Parfait", price: 6.99 },
//   omelette: { name: "Omelette", price: 11.99 },
//   pancakes: { name: "Stack of pancakes", price: 14.99 },
//   // Lunch items
//   burger: { name: "Double Bacon Cheese Burger", price: 9.99 },
//   veggiesub: { name: "Veggie Subsandwich", price: 6.99 },
//   clubsalad: { name: "Clubhouse w/ Salad", price: 8.99 },
//   gardensalad: { name: "Garden Salad", price: 12.99 },
//   burgerfries: { name: "Simple burger", price: 9.99 },
//   // Appetizer items
//   spinachdip: { name: "Spinach Dip", price: 8.99 },
//   wings: { name: "Zinger Wings", price: 5.99 },
//   // Dinner/main
//   spaghetti: { name: "Spaghetti", price: 14.99 },
//   shrimp: { name: "Shrimp w/ Rice", price: 14.99 },
//   stake: { name: "Top Loin Stake", price: 15.99 },
//   lasagna: { name: "Lasagna", price: 15.99 },
//   chickenpic: { name: "Chicken Piccata", price: 15.99 },
//   //Drinks
//   //Hot
//   lightroast: { name: "Light Roast", price: 1.99 },
//   mediumroast: { name: "Medium Roast", price: 1.99 },
//   darkroast: { name: "Dark Roast", price: 1.99 },
//   speccoffee: { name: "Specialty Coffee", price: 2.49 },
//   steeptea: { name: "Steep Tea", price: 1.49 },
//   greentea: { name: "Green Tea", price: 1.79 },
//   earlgray: { name: "Earl Gray Tea", price: 1.79 },
//   spectea: { name: "Specialty Tea", price: 2.29 },
//   //Cold
//   water: { name: "Water", price: 0.99 },
//   pepis: { name: "Pepis", price: 1.99 },
//   sevenup: { name: "7 up", price: 1.99 },
//   coke: { name: "Coke", price: 1.99 },
//   cokezero: { name: "Coke Zero", price: 1.99 },
// };

// document.addEventListener("click", (e) => {
//   const btn = e.target.closest("button");
//   if (!btn) return;
//   const item = menu[btn.id];
//   if (!item) return;
//   console.log("Adding:", item.name, "for", item.price);
// });

// document.addEventListener("DOMContentLoaded", renderCart);
// document.addEventListener("click", (e) => {})(() => {
//   const CART_KEY = "gb_cart";
//   const money = (n) => `$${(Number(n) || 0).toFixed(2)}`;
//   const read = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");

//   function renderCart() {
//     const tbody = document.querySelector("#cartTable tbody");
//     if (!tbody) return;

//     const items = read();

//     if (!items.length) {
//       tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">Your cart is empty.</td></tr>`;
//       return;
//     }

//     tbody.innerHTML = items
//       .map((i) => {
//         const line = i.price * i.qty;
//         return `
//           <tr>
//             <td>${i.name}</td>
//             <td>${i.qty}</td>
//             <td>${money(i.price)}</td>
//             <td>${money(line)}</td>
//           </tr>
//         `;
//       })
//       .join("");
//   }

//   document.addEventListener("DOMContentLoaded", renderCart);

//   // Demo buttons
//   document.querySelector("#addExampleItems").addEventListener("click", () => {
//     const sample = [
//       { name: "Apple", qty: 2, price: 1.5 },
//       { name: "Banana", qty: 3, price: 0.75 },
//       { name: "Chocolate", qty: 1, price: 2.99 },
//     ];
//     localStorage.setItem(CART_KEY, JSON.stringify(sample));
//     renderCart();
//   });

//   document.querySelector("#clearCart").addEventListener("click", () => {
//     localStorage.removeItem(CART_KEY);
//     renderCart();
//   });
// })();

document.addEventListener("DOMContentLoaded", () => {
  const quantitySelectors = document.querySelectorAll(".quantity-selector");

  quantitySelectors.forEach((selector) => {
    const minusBtn = selector.querySelector(".minus");
    const plusBtn = selector.querySelector(".plus");
    const quantityInput = selector.querySelector(".quantity-input");

    minusBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value) || 0;
      const min = parseInt(quantityInput.min) || 1;
      if (currentValue > min) {
        quantityInput.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value) || 0;
      quantityInput.value = currentValue + 1;
    });

    quantityInput.addEventListener("change", () => {
      let currentValue = parseInt(quantityInput.value);
      const min = parseInt(quantityInput.min) || 1;
      if (isNaN(currentValue) || currentValue < min) {
        quantityInput.value = min;
      }
    });
  });
});
