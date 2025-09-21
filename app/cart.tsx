import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CartItem from "../components/CartItem";
import CheckoutPopup from "../components/CheckoutPopup";
import { useCart } from "../context/CartContext";
import styles from "../styles/cartScreen";

export default function CartScreen() {
  const { cart, increase, decrease, remove, clear } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={increase}
            onDecrease={decrease}
            onDelete={remove}
          />
        )}
      />

      {cart.length > 0 && (
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => setShowCheckout(true)}>
          <Text style={styles.checkoutText}>
            Proceed to Checkout • ₹{cart.reduce((s, i) => s + i.price * i.quantity, 0)}
          </Text>
        </TouchableOpacity>
      )}

      <CheckoutPopup
        visible={showCheckout}
        items={cart}
        onClose={() => setShowCheckout(false)}
        onConfirm={() => {
          clear();
          setShowCheckout(false);
          router.replace("/summary");
        }}
      />
    </View>
  );
}
