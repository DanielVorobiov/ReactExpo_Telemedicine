import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

export default function HomeScreen(navigation) {
  const [text, setText] = useState("");
  return (
    
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20, color: "#07da5f" }}>Very Urgent</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Name</Text>

        <TextInput
          theme={{ colors: { primary: "#07da5f", underlineColor: "gray" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Your name"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Desease</Text>

        <TextInput
          theme={{ colors: { primary: "#07da5f", underlineColor: "gray" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="What is your desease"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Location</Text>

        <TextInput
          theme={{ colors: { primary: "#07da5f", underlineColor: "gray" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Where is your location"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Description(Optional)</Text>

        <TextInput
          theme={{ colors: { primary: "#07da5f", underlineColor: "gray" } }}
          mode="outlined"
          selectionColor="#07da5f"
          multiline
          numberOfLines={4}
          style={styles.input}
          placeholder="Where is your location"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />

        <TouchableOpacity style={styles.button2}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Request</Text>
        </TouchableOpacity>
      </View>
    
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 220,
    marginTop: 45,
    borderWidth: 1,
    borderColor: "#07da5f",
    marginHorizontal: 95,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: "#07da5f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 300,
    marginTop: 45,
    borderWidth: 1,
    borderColor: "#07da5f",
    marginHorizontal: 50,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:30,
    //justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    borderColor: "grey",
    width: 350,
    justifyContent: "center",
    marginLeft: 20,
  },
  text: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
