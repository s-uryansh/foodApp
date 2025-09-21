import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  AccessibilityRole,
  Animated,
  Easing,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useCart } from "../context/CartContext";
import { floatingStyles } from "../styles/floating";
import CartButton from "./CartButton";

type Position = "leftMid";

export default function FloatingMenu({ position = "leftMid" as Position }) {
  const { cart } = useCart();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    const toValue = open ? 0 : 1;
    Animated.timing(anim, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true, 
    }).start();
    setOpen(!open);
  };

  const rotation = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const mainOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.45, 1],
  });

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -80],
  });
  const childOpacity = anim.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, 0.6, 1] });
  const scale = anim.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] });

  const goHome = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 180,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setOpen(false);
      router.replace("/");
    });
  };

  const containerStyle: StyleProp<ViewStyle> = floatingStyles.containerLeftMid;

  return (
    <>
      {/* Cart Button */}
      {cart.length > 0 && (
        <View style={floatingStyles.containerBottomRight}>
          <CartButton count={cart.reduce((s, i) => s + i.quantity, 0)} onPress={() => router.push("/cart")} />
        </View>
      )}

      {/* Main Menu */}
      <View pointerEvents="box-none" style={containerStyle}>
        <Animated.View
          style={[
            floatingStyles.childWrap,
            {
              transform: [{ translateY }, { scale }],
              opacity: childOpacity,
            },
          ]}
          pointerEvents={open ? "auto" : "none"}
        >
          <TouchableOpacity
            accessibilityRole={"button" as AccessibilityRole}
            accessibilityLabel="Go to Home"
            activeOpacity={0.85}
            onPress={goHome}
            style={floatingStyles.childButton}
          >
            <Text style={floatingStyles.childText}>🏠</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            floatingStyles.mainWrap,
            { transform: [{ rotate: rotation }], opacity: mainOpacity },
          ]}
        >
          <TouchableOpacity
            accessibilityRole={"button" as AccessibilityRole}
            accessibilityLabel="Open menu"
            activeOpacity={0.9}
            onPress={toggle}
            style={floatingStyles.mainButton}
          >
            <Text style={floatingStyles.mainText}>+</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
}
