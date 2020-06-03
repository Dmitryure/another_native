import { ImageSourcePropType } from "react-native";

export type product = {
  id?: string;
  price: number;
  description: string;
  img: ImageSourcePropType[];
  title: string;
};
