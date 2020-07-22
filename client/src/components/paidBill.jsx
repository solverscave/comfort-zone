import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import 'moment-timezone';
import bill_Image from './../assets/img/billing/paid.jpg';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: '',
    border: '1px solid red',
  },
  section: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
    fontSize: 50,
    fontFamily: 'Questrial',
  },
  textLeft: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Questrial',
    border: 2,
    borderColor: 'black',
    paddingTop: 5,
    paddingLeft: 5,
    marginRight: 5,
    width: '50%',
    textAlign: 'left',
  },
  textRight: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Questrial',
    border: 2,
    borderColor: 'black',
    paddingTop: 5,
    paddingLeft: 5,
    width: '50%',
    textAlign: 'left',
  },
  textLeftDate: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Questrial',
    border: 2,
    borderColor: 'black',
    paddingTop: 5,
    paddingLeft: 5,
    marginRight: 5,
    width: '50%',
    textAlign: 'left',
    backgroundColor: '#E4E4E4',
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Questrial',
    border: 2,
    borderColor: 'black',
    paddingTop: 5,
    paddingLeft: 5,
    width: '101%',
    textAlign: 'center',
    backgroundColor: '#E4E4E4',
  },
  textRightDate: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Questrial',
    border: 2,
    borderColor: 'black',
    paddingTop: 5,
    paddingLeft: 5,
    width: '50%',
    textAlign: 'left',
    backgroundColor: '#E4E4E4',
  },
  col2: {
    width: '50%',
  },
  image: {
    width: 60,
  },
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Questrial',
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  block: {
    flexGrow: 1,
  },
  textItalic: {
    width: '60%',
    margin: 10,
    fontFamily: 'Questrial',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  divider: {
    borderTop: 2,
    borderColor: '#000',
    width: '101%',
    marginTop: 10,
    borderStyle: 'dashed',
  },
});

// Create Document Component
export const PaidBill = () => (
  <Document style={{ backgroundColor: 'blue' }}>
    <Page size='B5' style={{ backgroundColor: '#f7f7f7' }}>
      <View style={styles.section}>
        <Image
          src={bill_Image}
          // style={{ width: '150px', alignContent: 'center' }}
        />
      </View>
    </Page>
  </Document>
);

export default PaidBill;
