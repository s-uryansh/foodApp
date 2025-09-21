import { StyleSheet } from "react-native";
import { colors } from "./theme";

export default StyleSheet.create({
  container: { padding: 16, backgroundColor: colors.bg },
  input: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    color: colors.text,
    fontWeight: "600",
    fontSize: 16, 
  },
  placeholder: { color: colors.muted },
});
