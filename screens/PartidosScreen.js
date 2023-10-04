import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import FancyTable from "react-native-fancy-table";

export default function PartidosScreen() {
  const header = [
    " id",
    "Roll No",
    "Order Qty",
    "Line Input",
    "Line Balalance",
    "Production",
    "Sample",
    "Killed",
    "Missing",
    "Buy Date",
    "Ship Date",
    "Proto No",
    "Set Code",
    "Destination Place",
    "Delivery Place",
    "Item Number",
  ];
  const tableBody = [
    {
      id: 1,
      RollNo: "1",
      Pdm_ItemCode: "2442010",
      description: " BUET",
      LotNo: "N23060829",
      UOM: "YDS",
      RollQty: 55,
      RollWidth: "153cm",
      RollColor: "DKT N07A BLACK",
      RollShrinkageWarp: "",
      RollshrinkageWeft: "",
      SupplierId: 380,
      supplier: "",
      ItemId: 0,
      item: "Fabric",
      consignment: "3333",
    },
    {
      id: 1,
      RollNo: "1",
      Pdm_ItemCode: "2442010",
      description: " BUET",
      LotNo: "N23060829",
      UOM: "YDS",
      RollQty: 55,
      RollWidth: "153cm",
      RollColor: "DKT N07A BLACK",
      RollShrinkageWarp: "",
      RollshrinkageWeft: "",
      SupplierId: 380,
      supplier: "",
      ItemId: 0,
      item: "Fabric",
      consignment: "3333",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FancyTable
          headerBGColor="silver"
          headerFontColor="white"
          headerFontSize={15}
          bodyFontSize={13}
          bodyFontColor="black"
          tableHeight={1.4}
          header={header}
          tableBody={tableBody}
          rowWidth={4}
          borderColor="gray"
          borderWidth={1}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 28 },
  text: { textAlign: "center" },
});

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabla: {
    borderColor: "#000000",
    borderWidth: 2,
  },
});*/
