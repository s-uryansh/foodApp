import { StyleSheet } from "react-native";
import { colors } from "./theme";
export default StyleSheet.create({
  homeContainer: { flex: 1, backgroundColor: colors.bg },
  cartContainer: { flex: 1, backgroundColor: colors.bg },
  cartEmpty: { marginTop: 120, alignItems: "center" },
  cartEmptyText: { color: colors.muted, fontSize: 16 },
  checkoutBtn: {
    backgroundColor: colors.accent,
    margin: 16,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 6,
  },
  checkoutText: { color: colors.text, fontSize: 16, fontWeight: "700" },
});
