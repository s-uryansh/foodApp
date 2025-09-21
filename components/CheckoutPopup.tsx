import React, { useState } from "react";
import { ActivityIndicator, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../lib/firebase";
import { createOrder } from "../services/order";
import styles from "../styles/checkout";

export default function CheckoutPopup({ visible, items = [], onClose, onConfirm }: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onConfirmHandler = async (itemsParam: any[]) => {
    setError(null);
    setLoading(true);
    try {
      const uid = auth.currentUser?.uid ?? null;
      const result = await createOrder(uid, itemsParam);
      setLoading(false);
      if (typeof onConfirm === "function") onConfirm(result);
    } catch (err: any) {
      console.error("createOrder error:", err);
      setError(err?.message ?? "Failed to place order");
      setLoading(false);
    }
  };

  const foodGST = 0.05;
  const deliveryGST = 0.18;
  const subtotal = items.reduce((s: number, i: any) => s + i.price * i.quantity, 0);
  const gstOnFood = subtotal * foodGST;
  const total = subtotal + gstOnFood;
  const finalTotal = total + total * deliveryGST;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>Checkout</Text>

          <ScrollView style={{ maxHeight: 260 }}>
            {items.length === 0 && <Text style={styles.itemName}>No items</Text>}
            {items.map((i: any) => (
              <View key={i.id} style={styles.itemRow}>
                <Text style={styles.itemName}>{i.name} x{i.quantity}</Text>
                <Text style={styles.itemPrice}>₹{i.price * i.quantity}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.summary}>
            <Text style={styles.summaryText}>Food GST (5%): ₹{gstOnFood.toFixed(2)}</Text>
            <Text style={styles.summaryText}>Delivery GST (18%): ₹{(total * deliveryGST).toFixed(2)}</Text>
            <Text style={styles.total}>Final: ₹{finalTotal.toFixed(2)}</Text>
          </View>

          {error ? <Text style={{ color: "tomato", textAlign: "center", marginTop: 8 }}>{error}</Text> : null}

          <TouchableOpacity
            style={[styles.confirmBtn, loading ? { opacity: 0.7 } : {}]}
            onPress={() => onConfirmHandler(items)}
            disabled={loading || items.length === 0}
          >
            {loading ? <ActivityIndicator color={"#fff"} /> : <Text style={styles.confirmText}>Confirm Order</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose} disabled={loading}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
