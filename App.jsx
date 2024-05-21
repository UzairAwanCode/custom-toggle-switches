import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Toggle from "react-native-toggle-input";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <Toggle
        toggle={toggle}
        setToggle={setToggle}
        color={"orange"}
        size={20}
        filled={true}
        circleColor={"white"}
        onTrue={() => Alert.alert("Switched On")}
        onFalse={() => Alert.alert("Switched Off")}
      />
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
