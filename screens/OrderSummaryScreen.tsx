import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function OrderSummaryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.text}>Your order has been placed successfully!</Text>
      <Button title="Go Home" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0f1720" }, 
  emoji: { fontSize: 60, marginBottom: 20, color: "#e6eef3" },
  text: { fontSize: 18, textAlign: "center", marginBottom: 20, color: "#e6eef3" }, 
});
