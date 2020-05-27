import { product } from "../types/product";

export const mockProducts: product[] = [
  {
    price: 200,
    description: "Super jacket",
    img: require("../assets/jacket1.jpg"),
    title: "Light jacket",
  },
  {
    price: 250,
    description: "Another super jacket, but dark brown",
    img: require("../assets/jacket2.jpg"),
    title: "Dark brown jacket",
  },
  {
    price: 285,
    description: "3rd jacket",
    img: require("../assets/jacket3.jpg"),
    title: "Shirt-like jacket",
  },
];
