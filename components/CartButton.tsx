import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/cartButton";
export default function CartButton({ count, onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>🛒 {count}</Text>
    </TouchableOpacity>
  );
}
