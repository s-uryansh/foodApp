import { StyleSheet } from "react-native";
import { colors } from "./theme";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 12, justifyContent: "space-between" },
  name: { fontSize: 15, fontWeight: "700", color: colors.text },
  price: { fontSize: 14, fontWeight: "700", color: colors.accent },
  controls: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  controlBtn: { backgroundColor: colors.card, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  controlText: { fontSize: 16, color: colors.text, fontWeight: "700" },
  quantity: { marginHorizontal: 12, color: colors.text, fontSize: 16 },
  deleteBtn: { marginLeft: "auto", backgroundColor: colors.danger, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  deleteText: { color: "#fff", fontWeight: "700" },
});
