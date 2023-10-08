import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
// Create styles
const styles = StyleSheet.create({
  page: {},
  section: {
    margin: 10,
    padding: 10,
  },
  selections: {
    textDecoration: 'underline',
    fontSize: 9,
    marginTop: 8,
  },
  allSelections: {
    letterSpacing: 1,
    fontSize: 7,
    padding: '2px 0',
  },
  userInfo: {
    borderBottom: '1px solid #000',
  },
  title: {
    fontWeight: 'bold',
    padding: '8px 0',
    textDecoration: 'underline',
    lineHeight: '12px',
    fontSize: 9,
  },
});

// Create Document Component
const PurchaseOrderReport = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>List of purchase orders</Text>
          <Text style={styles.selections}>Selection</Text>
          <Text style={styles.allSelections}>Financial Year - {'2023'}</Text>
          <Text style={styles.allSelections}>Supplier - {'All'}</Text>
          <Text style={styles.allSelections}>Source - {'All'}</Text>
          <Text style={styles.allSelections}>From Order Date - {'NA'}</Text>
          <Text style={styles.allSelections}>To Order Date - {'NA'}</Text>
          <Text style={styles.allSelections}>From Order Number - {'NA'}</Text>
          <Text style={styles.allSelections}>To Order Number - {'NA'}</Text>
          <Text style={styles.allSelections}>Print Order - {'Order Number'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>User {'FMS'}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PurchaseOrderReport;
