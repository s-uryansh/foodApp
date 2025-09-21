import { colors } from "@/styles/theme";
import { TextInput, View } from "react-native";
import styles from "../styles/searchBar";
export default function SearchBar({ value, onChange }: any) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search dishes, e.g. biryani"
        placeholderTextColor={colors.muted} 
        value={value}
        onChangeText={onChange}
        style={[styles.input, { color: colors.text }]}
      />
    </View>
  );
}
