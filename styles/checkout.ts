import { StyleSheet } from "react-native";
import { colors } from "./theme";
export default StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  popup: { backgroundColor: colors.surface, padding: 20, borderTopLeftRadius: 18, borderTopRightRadius: 18 },
  title: { fontSize: 18, fontWeight: "800", color: colors.text, marginBottom: 10 },
  itemRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  itemName: { color: colors.text },
  itemPrice: { color: colors.accent, fontWeight: "700" },
  summary: { marginTop: 12, borderTopWidth: 1, borderColor: "#111827"
, paddingTop: 10 },
  summaryText: { color: colors.muted, marginVertical: 2 },
  total: { color: colors.accent, fontWeight: "800", marginTop: 6, fontSize: 16 },
  confirmBtn: { backgroundColor: colors.accent, paddingVertical: 12, borderRadius: 12, marginTop: 12, alignItems: "center" },
  confirmText: { color: colors.text, fontWeight: "800" },
  closeBtn: { paddingVertical: 12, borderRadius: 12, marginTop: 8, alignItems: "center", backgroundColor: colors.card },
  closeText: { color: colors.muted, fontWeight: "700" },
});
