import { FlatList } from "react-native";

import Colors from "@/src/constants/Colors";

import products from "@/assets/data/products";
import { ProductListItem } from "@/src/components/ProductListItems";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}}
    />
  );
}
