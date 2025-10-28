// menu-data.js

const menuItems = {
  //=============================================================
  // This file will contains all menu item data for the restaurant.
  //=============================================================
  //
  //
  // Each property inside menuItems is an OBJECT not an array.
  // Key = unique item ID (used for lookups in JavaScript)
  // Value = object holding { name, price }
  //
  //   Example access:
  //   menuItems["burger"].name    "Double Cheese Burger"
  //   menuItems["burger"].price   9.99
  //
  //   To convert to an array format later, you could use:
  //           Object.values(menuItems)
  //
  //  File loaded message at the bottom confirms data load success.
  //=============================================================

  //==============
  // Breakdfast
  //==============

  avotoastegg: { name: "Avocado Toast With Egg", price: 8.99 },
  croissant: { name: "Croissant", price: 6.99 },
  yogurt: { name: "Yogurt Parfait", price: 6.99 },
  omelette: { name: "Omelette", price: 11.99 },
  pancakes: { name: "Stack of Pancakes", price: 14.99 },

  //==============
  // lunches
  //==============

  burger: { name: "Double Cheese Burger", price: 9.99 },
  veggiesub: { name: "Veggie Sub", price: 6.99 },
  clubsalad: { name: "Clubhouse & Salad", price: 8.99 },
  gardensalad: { name: "Garden Salad", price: 12.99 },
  burgersalad: { name: "Simple Hamburger", price: 9.99 },

  //==============
  // Apps
  //==============

  spinachdip: { name: "Spinach Dip", price: 8.99 },
  wings: { name: "Zinger Wings", price: 5.99 },

  //==============
  // Main Courses
  //==============

  spaghetti: { name: "Spaghetti", price: 15.99 },
  shrimp: { name: "Shrimp Gumbo w/ Rice", price: 15.99 },
  steak: { name: "Top Loin Steak", price: 15.99 },
  lasagna: { name: "Lasagna", price: 15.99 },
  chicken: { name: "Chicken Piccata", price: 15.99 },

  //==============
  // Drinks here
  //==============

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
  sevenup: { name: "7 UP", price: 1.99 },
  coke: { name: "Coke", price: 1.99 },
  cokezero: { name: "Coke Zero", price: 1.99 },
  apple: { name: "Apple Juice", price: 1.99 },
  orange: { name: "Orange Juice", price: 1.99 },
  gatorade: { name: "Gatorade", price: 1.99 },
};

console.log("Menu data loaded:", Object.keys(menuItems).length, "items");
