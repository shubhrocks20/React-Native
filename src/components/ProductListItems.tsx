import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"
type ProductListItemProps = {
    product: Product
}
export const ProductListItem = ({product} : ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // mainContainer: {
  //   height: "auto",
  //   overscrollBehaviorY: "auto"
  // },
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});