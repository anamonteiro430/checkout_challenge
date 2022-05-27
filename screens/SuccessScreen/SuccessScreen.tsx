import React, { useEffect } from "react";
import { View, Text } from "react-native";

const SuccessScreen = () => {
  useEffect(() => {
    console.log("in success screen");
  }, []);

  return (
    <View>
      <Text>Success!</Text>
    </View>
  );
};

export default SuccessScreen;
