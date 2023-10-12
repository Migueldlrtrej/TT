import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Table, Row } from "react-native-table-component";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

const SecretarioScreen = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleConfirm = (date) => {
    // Lógica para manejar la fecha seleccionada.
    setIsDatePickerVisible(false);
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const navigation = useNavigation();
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      
        <View style={styles.IconInput}>
          
          <TouchableOpacity>
            <Ionicons name="menu" size={35} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Secretario de liga</Text>
        </View>
        <Text style={styles.Subtitulo}>Validación equipos</Text>
        <ScrollView horizontal={true}>
          <View paddingHorizontal={10}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#000000" }}>
              <Row
                data={["Equipo", "Rama", "Entrenador"]}
                widthArr={[150, 50, 150]}
                style={[styles.header, styles.tableRow]}
                textStyle={styles.text}
              />
            </Table>
          </View>
        </ScrollView>

        <View style={styles.boton}>
          <View style={styles.IconInput}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TouchableOpacity onPress={showDatePicker} style={styles.button}>
              <Ionicons name="calendar" size={35} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        <Table borderStyle={{ borderWidth: 1, borderColor: "#000000" }}>
          <Row
            data={["Número máximo de equipos por entrenador", "2"]}
            widthArr={[150, 50]}
            style={[styles.header, styles.tableRow]}
            textStyle={styles.text}
          />
        </Table>

        <Text style={styles.Subtitulo}>Validación equipos</Text>
        <ScrollView horizontal={true}>
          <View paddingHorizontal={10}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#000000" }}>
              <Row
                data={["Núm.Torneo", "Fecha de inicio", "Equipos"]}
                widthArr={[100, 100, 100]}
                style={[styles.header, styles.tableRow]}
                textStyle={styles.text}
              />
              
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.TextoBoton2}>Regresar </Text>
              </TouchableOpacity>


            </Table>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Fondo con color blanco
  },
  contentContainer: {
    flexGrow: 1,
  },
  IconInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    color: "#000000",
  },
  Subtitulo: {
    fontSize: 20,
    color: "#000000",
  },
  header: {
    backgroundColor: "#ff6624", // Color de la primera fila de las tablas
  },
  tableRow: {
    backgroundColor: "#ff6624", // Color de la primera fila de las tablas
  },
  text: {
    margin: 6,
    color: "#000000",
  },
  boton: {
    backgroundColor: "#ff6624", // Color  botón
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff6624", // Color botón
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default SecretarioScreen;
