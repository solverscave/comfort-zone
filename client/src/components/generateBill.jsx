import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "10px",
    border: "1px solid red"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 2,
    fontSize: 20
  },
  text: {
    fontSize: 15,
    marginTop: 10
  }
});

// Create Document Component
const GenerateBill = ({ name, amount }) => (
  <Document style={{ backgroundColor: "blue" }}>
    <Page size="B5" style={{ backgroundColor: "#f7f7f7" }}>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
          Airport Housing Society Bill
        </Text>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Amount: {amount}</Text>
      </View>
    </Page>
  </Document>
);
export default GenerateBill;
