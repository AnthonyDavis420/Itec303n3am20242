import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function rolePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gawa dito signUp</Text>
      <Text style={styles.subtitle}></Text>

      <Link href="/landingPage" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CLICK to beadle page</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/rolePage" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CLICK to Student page</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {},
  subtitle: {},
  button: {},
  buttonText: {},
});
