import { CartProduct } from "../types/cart";

export const foods: Omit<CartProduct, "quantity">[] = [
  {
    id: "1",
    name: "Paneer Butter Masala",
    description: "Rich creamy curry with soft paneer cubes",
    price: 200,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/07/paneer-butter-masala.jpg",
  },
  {
    id: "2",
    name: "Veg Biryani",
    description: "Aromatic rice cooked with spices & veggies",
    price: 150,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/veg-biryani-recipe.jpg",
  },
  {
    id: "3",
    name: "Masala Dosa",
    description: "Crispy dosa stuffed with spiced potato filling",
    price: 120,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/masala-dosa.jpg",
  },
];


// This was used for testing