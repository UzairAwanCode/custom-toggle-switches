import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Toggle from "react-native-toggle-input";

const CustomToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View>
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
};

export default CustomToggleSwitch;
