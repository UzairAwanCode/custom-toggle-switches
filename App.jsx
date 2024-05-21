import { StyleSheet, View } from "react-native";
import CustomToggleSwitch from "./src/components/CustomToggleSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomToggleSwitch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
