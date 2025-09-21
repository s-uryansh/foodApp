import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/foodCard";
export default function FoodCard({ item, onAdd }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>₹{item.price}</Text>
          <TouchableOpacity style={styles.addBtn} onPress={() => onAdd(item)}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
