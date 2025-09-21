import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/cartItem";
export default function CartItem({ item, onIncrease, onDecrease, onDelete }: any) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price * item.quantity}</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlBtn} onPress={() => onDecrease(item.id)}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity style={styles.controlBtn} onPress={() => onIncrease(item.id)}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(item.id)}>
            <Text style={styles.deleteText}>🗑</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
