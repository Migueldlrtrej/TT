import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';
//import Yato from './assets/inarazki.jpg'



const calis = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const buttonSytle = isPressed
    ? {backgroundColor: "#e74c3c"}
    : {backgroundColor: "#3498db"};


    return (
      <View style = {styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.button, buttonSytle]}
        
        >
          <Text style={styles.buttonText}>
            Cambiar Estilo
          </Text>

        </TouchableOpacity>

      </View>


    );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default calis;
