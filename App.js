import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>Sunao</Text>
        <Text style={styles.greeting}>Good Evening</Text>
        <Text style={styles.subtitle}>How are you feeling today?</Text>
      </View>

      <View style={styles.center}>
        <View style={styles.orbOuter}>
          <View style={styles.orbInner} />
        </View>

        <Text style={styles.status}>Sunao is here.</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🎤 Talk to Sunao</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F19",
    paddingHorizontal: 24,
  },

  header: {
    marginTop: 40,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
  },

  greeting: {
    color: "#FFFFFF",
    fontSize: 22,
    marginTop: 20,
    fontWeight: "600",
  },

  subtitle: {
    color: "#A5AEC0",
    marginTop: 8,
    fontSize: 15,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  orbOuter: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#141A2A",
    justifyContent: "center",
    alignItems: "center",
  },

  orbInner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#7C9DFF",
  },

  status: {
    color: "#A5AEC0",
    marginTop: 30,
    fontSize: 16,
  },

  footer: {
    paddingBottom: 40,
  },

  button: {
    backgroundColor: "#7C9DFF",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
