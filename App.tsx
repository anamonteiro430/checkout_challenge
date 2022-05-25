import React from "react";
import { StyleSheet, View } from "react-native";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <PersonalInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
