import { product } from "../types/product";

export const mockProducts: product[] = [
  {
    id: "1",
    price: 200,
    description: "Super jacket",
    img: [
      require("../assets/jacket1.jpg"),
      require("../assets/jacket1.jpg"),
      require("../assets/jacket1.jpg"),
    ],
    title: "Light jacket",
  },
  {
    id: "2",
    price: 250,
    description: "Another super jacket, but dark brown",
    img: [
      require("../assets/jacket2.jpg"),
      require("../assets/jacket2.jpg"),
      require("../assets/jacket2.jpg"),
    ],
    title: "Dark brown jacket",
  },
  {
    id: "3",
    price: 285,
    description: "3rd jacket",
    img: [require("../assets/jacket3.jpg")],
    title: "Shirt-like jacket",
  },
];
