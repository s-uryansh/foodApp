import { StyleSheet } from "react-native";
import { colors } from "./theme";
export default StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 26,
    right: 20,
    backgroundColor: colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    elevation: 8,
  },
  text: { color: "#fff", fontWeight: "800", fontSize: 15 },
});
