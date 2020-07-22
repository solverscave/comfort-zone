import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import 'moment-timezone';
import bill_Image from './../assets/img/billing/aechs.png';

Font.register({
  family: 'Questrial',
  src: 'https://fonts.gstatic.com/s/questrial/v10/QdVUSTchPBm7nuUeVf70sCFg.ttf',
});
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: '10px',
    border: '1px solid red',
  },
  section: {
    margin: 10,
    padding: 15,
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
const GenerateBill = ({
  userName,
  userMembershipNumber,
  userAddress,
  id,
  dateOfIssue,
  dueDate,
  arrearAmount,
  waterCharges,
  conservancyCharges,
  streetLightCharges,
  roadMaintenanceCharges,
  graveyardCharges,
  electricityCharges,
  dueAmount,
  totalAmount,
}) => (
  <Document style={{ backgroundColor: 'blue' }}>
    <Page size='B5' style={{}}>
      <View style={styles.section}>
        <View style={styles.body}>
          <Image
            src={bill_Image}
            // style={{ width: '150px', alignContent: 'center' }}
          />
          {/* <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          >
          Airport Housing Society
        </Text> */}

          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontFamily: 'Questrial',
                width: '60%',
              }}
            >
              Ref# : {id}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontFamily: 'Questrial',
                width: '40%',
                textAlign: 'right',
              }}
            >
              Name: {userName}{' '}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontFamily: 'Questrial',
                width: '60%',
              }}
            >
              Address : {userAddress}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontFamily: 'Questrial',
                width: '40%',
                textAlign: 'right',
                fontWeight: 700,
              }}
            >
              Membership Number: {userMembershipNumber}{' '}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>OFFICE COPY</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textLeftDate}>
              Date of Issue: {dateOfIssue}
            </Text>
            <Text style={styles.textRightDate}>Due Date: {dueDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textLeft}>Arrear Amount: {arrearAmount}</Text>
            <Text style={styles.textRight}>Water Charges: {waterCharges}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Conservancy Charges: {conservancyCharges}
            </Text>
            <Text style={styles.textRight}>
              Street Light Charges: {streetLightCharges}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Road Maint. Charges: {roadMaintenanceCharges}
            </Text>
            <Text style={styles.textRight}>
              Graveyard Charges: {graveyardCharges}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Electricity Charges: {electricityCharges}
            </Text>
            <Text style={styles.textLeft}>Due Amount: {dueAmount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Total Amount: {totalAmount}</Text>
          </View>
          {/* {SEPERATE} */}

          <View style={styles.row}>
            <View style={styles.divider}></View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>PERSONAL COPY</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textLeftDate}>
              Date of Issue: {dateOfIssue}
            </Text>
            <Text style={styles.textRightDate}>Due Date: {dueDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textLeft}>Arrear Amount: {arrearAmount}</Text>
            <Text style={styles.textRight}>Water Charges: {waterCharges}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Conservancy Charges: {conservancyCharges}
            </Text>
            <Text style={styles.textRight}>
              Street Light Charges: {streetLightCharges}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Road Maint. Charges: {roadMaintenanceCharges}
            </Text>
            <Text style={styles.textRight}>
              Graveyard Charges: {graveyardCharges}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textLeft}>
              Electricity Charges: {electricityCharges}
            </Text>
            <Text style={styles.textLeft}>Due Amount: {dueAmount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Total Amount: {totalAmount}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default GenerateBill;
