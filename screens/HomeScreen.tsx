import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import { useCart } from "../context/CartContext";
import { useMenu } from "../hooks/useMenu";
import screenStyles from "../styles/screens";

export default function HomeScreen() {
  const { menu, loading, error } = useMenu();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = menu.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={[screenStyles.homeContainer, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#ff5d3a" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[screenStyles.homeContainer, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "#fff" }}>Failed to load menu. Try again later.</Text>
      </View>
    );
  }

  return (
    <View style={screenStyles.homeContainer}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} onAdd={addToCart} />}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}
