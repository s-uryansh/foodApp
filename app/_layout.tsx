import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FloatingMenu from "../components/floatingMenu";
import { CartProvider } from "../context/CartContext";
import { colors } from "../styles/theme";

export default function RootLayout() {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false }} />
          <FloatingMenu />
        </SafeAreaView>
      </SafeAreaProvider>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
