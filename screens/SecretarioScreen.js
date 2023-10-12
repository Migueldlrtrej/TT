import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, Row, Cell } from 'react-native-table-component';

const Secretario = () => {
  const [tableData1, setTableData1] = useState([
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c']
  ]);

  const [tableData2, setTableData2] = useState([
    ['1', '2'],
    ['a', 'b'],
    ['1', '2'],
    ['a', 'b']
  ]);

  const [tableData3, setTableData3] = useState([
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c']
  ]);

  const [tableData4, setTableData4] = useState([
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c']
  ]);

  const alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  };

  // Función para renderizar el botón en la cuarta columna
  const renderButton = (index) => (
    <TouchableOpacity onPress={() => alertIndex(index)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Button</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {/* Tabla 1 con título */}
        <Text style={styles.tableTitle}>Horario de</Text>
        <Table borderStyle={{ borderColor: 'black', borderWidth: 1 }}>
          <Row data={[' Partido', 'Fecha', 'Hora', 'Acciones']} style={styles.head} textStyle={styles.headText} />
          {tableData1.map((rowData, rowIndex) => (
            <Row
              key={rowIndex}
              data={[...rowData, renderButton(rowIndex)]}
              style={rowIndex % 2 === 0 ? styles.rowEven : styles.rowOdd}
              textStyle={styles.text}
            />
          ))}
        </Table>

        {/* Tabla 2 con título */}
        <Text style={styles.tableTitle}>Credenciales de jugador</Text>
        <Table borderStyle={{ borderColor: 'black', borderWidth: 1 }}>
          <Row data={['Jugador', 'Equipo', 'Credencial']} style={styles.head} textStyle={styles.headText} />
          {tableData2.map((rowData, rowIndex) => (
            <Row
              key={rowIndex}
              data={[...rowData, renderButton(rowIndex)]}
              style={rowIndex % 2 === 0 ? styles.rowEven : styles.rowOdd}
              textStyle={styles.text}
            />
          ))}
        </Table>

        {/* Tabla 3 con título */}
        <Text style={styles.tableTitle}>Equipos inscritos</Text>
        <Table borderStyle={{ borderColor: 'black', borderWidth: 1 }}>
          <Row data={['Equipo', 'Rama', 'Entrenador', 'Eliminar']} style={styles.head} textStyle={styles.headText} />
          {tableData3.map((rowData, rowIndex) => (
            <Row
              key={rowIndex}
              data={[...rowData, renderButton(rowIndex)]}
              style={rowIndex % 2 === 0 ? styles.rowEven : styles.rowOdd}
              textStyle={styles.text}
            />
          ))}
        </Table>

        {/* Tabla 4 con título */}
        <Text style={styles.tableTitle}>Hojas de anotacion</Text>
        <Table borderStyle={{ borderColor: 'black', borderWidth: 1 }}>
          <Row data={['Partido', 'Rana', 'Fecha', 'Hoja de anotación']} style={styles.head} textStyle={styles.headText} />
          {tableData4.map((rowData, rowIndex) => (
            <Row
              key={rowIndex}
              data={[...rowData, renderButton(rowIndex)]}
              style={rowIndex % 2 === 0 ? styles.rowEven : styles.rowOdd}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { flexGrow: 1 },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ff6624' },
  headText: { margin: 6, fontWeight: 'bold', color: 'white' },
  rowEven: { flexDirection: 'row', backgroundColor: 'white' },
  rowOdd: { flexDirection: 'row', backgroundColor: 'white' },
  text: { margin: 6 },
  btn: { width: 58, height: 18, backgroundColor: '#ff6624', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  tableTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
});

export default Secretario;
