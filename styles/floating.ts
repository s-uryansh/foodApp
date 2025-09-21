import { Platform, StyleSheet } from "react-native";
import { colors } from "./theme";

export const floatingStyles = StyleSheet.create({
  containerLeftMid: {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: [{ translateY: -26 }],
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 9999,
  },

  containerBottomRight: {
    position: "absolute",
    right: 20,
    bottom: 80,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },

  mainWrap: {
    alignItems: "center",
    justifyContent: "center",
  },

  mainButton: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.34,
    shadowRadius: 10,
  },

  mainText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "800",
    lineHeight: Platform.OS === "ios" ? 22 : 20,
    textAlign: "center",
  },

  childWrap: {
    position: "absolute",
    top: -80, 
    alignItems: "center",
    justifyContent: "center",
  },

  childButton: {
    width: 46,
    height: 46,
    borderRadius: 999,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
  },

  childText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
  },
});
