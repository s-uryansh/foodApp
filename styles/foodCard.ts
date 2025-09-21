import { StyleSheet } from "react-native";
import { colors } from "./theme";
export default StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: colors.card,
    borderRadius: 14,
    overflow: "hidden",
    elevation: 6,
  },
  image: { width: "100%", height: 160 },
  info: { padding: 12 },
  name: { fontSize: 17, fontWeight: "700", color: colors.text },
  desc: { color: colors.muted, marginTop: 6 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12 },
  price: { fontSize: 16, fontWeight: "700", color: colors.accent },
  addBtn: { backgroundColor: colors.accentDark, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10 },
  addText: { color: colors.text, fontWeight: "700" },
});
