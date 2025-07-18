import img1 from '../img/magherita.jpg';
import img2 from '../img/paneer.jpg';
import img3 from '../img/Farmhouse.jpg';
import img4 from '../img/cheese.jpeg';
import img5 from '../img/choclate.jpg';
import img6 from '../img/oreo.webp';
import img7 from '../img/cold.avif';
import img8 from '../img/rose.jpg';
import img9 from '../img/white.webp';
import img10 from '../img/red.jpg';
import img11 from '../img/pink.jpg';
import img12 from '../img/paneers.cms';
import img13 from '../img/corn.jpg';
import img14 from '../img/veg.jpg';
import img15 from '../img/veg bur.jpg';
import img16 from '../img/paneerbur.jpg';
import img17 from '../img/aloo.jpg';
import img18 from '../img/fr.webp';
import img19 from  '../img/gralic.webp';
import img20 from '../img/na.jpg';

const menuItems = [
  // 🍕 Pizzas
  { id: 1, name: "Margherita Pizza", price: 299, category: "Pizza", image: img1, description: "Classic tomato & mozzarella", best: true },
  { id: 2, name: "Tandoori Paneer Pizza", price: 399, category: "Pizza", image: img2, description: "Spicy paneer with capsicum & onions", best: true },
  { id: 3, name: "Farmhouse Pizza", price: 349, category: "Pizza", image: img3, description: "Veggies overload", best: false },
  { id: 4, name: "Cheese Burst Pizza", price: 429, category: "Pizza", image: img4, description: "Oozing cheesy layers", best: false },

  // 🥤 Beverages
  { id: 5, name: "Chocolate Thickshake", price: 199, category: "Beverage", image: img5, description: "Rich cocoa & milk blend", best: true },
  { id: 6, name: "Oreo Shake", price: 219, category: "Beverage", image: img6, description: "Oreo blended shake with cream", best: false },
  { id: 7, name: "Cold Coffee", price: 149, category: "Beverage", image: img7, description: "Chilled brew topped with cream", best: true },
  { id: 8, name: "Rose Falooda", price: 179, category: "Beverage", image: img8, description: "Rose syrup, milk, and vermicelli", best: false },

  // 🍝 Pastas
  { id: 9, name: "White Sauce Pasta", price: 349, category: "Pasta", image: img9, description: "Creamy cheese-based sauce", best: true },
  { id: 10, name: "Red Sauce Pasta", price: 329, category: "Pasta", image: img10, description: "Spicy tomato base", best: false },
  { id: 11, name: "Pink Sauce Pasta", price: 359, category: "Pasta", image: img11, description: "Mix of red & white sauces", best: false },

  // 🥪 Sandwiches
  { id: 12, name: "Grilled Paneer Sandwich", price: 159, category: "Sandwich", image: img12, description: "Spiced paneer & cheese grill", best: false },
  { id: 13, name: "Veg Club Sandwich", price: 179, category: "Sandwich", image: img13, description: "Layered veggies & mayo", best: false },
  { id: 14, name: "Cheese Corn Sandwich", price: 169, category: "Sandwich", image: img14, description: "Cheesy delight with sweet corn", best: false },

  // 🍔 Burgers
  { id: 15, name: "Veggie Delight Burger", price: 189, category: "Burger", image: img15, description: "Fresh veggies with mayo", best: true },
  { id: 16, name: "Paneer Tikka Burger", price: 209, category: "Burger", image: img16, description: "Marinated paneer tikka style", best: false },
  { id: 17, name: "Aloo Patty Burger", price: 149, category: "Burger", image: img17, description: "Spiced aloo tikki & sauces", best: false },

  // 🍟 Sides
  { id: 18, name: "French Fries", price: 129, category: "Sides", image: img18, description: "Crispy potato sticks", best: false },
  { id: 19, name: "Cheesy Garlic Bread", price: 179, category: "Sides", image: img19, description: "Baked bread with garlic & cheese", best: true },
  { id: 20, name: "Nachos with Cheese Dip", price: 199, category: "Sides", image: img20, description: "Crunchy nachos & cheesy sauce", best: false }
];

export default menuItems;
