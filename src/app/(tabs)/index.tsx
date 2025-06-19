import {   View } from "react-native";

import Colors from "@/src/constants/Colors";
// import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import { ProductListItem } from "@/src/components/ProductListItems";


export default function MenuScreen() {
  return (
    <View >
      <ProductListItem product={products[4]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

