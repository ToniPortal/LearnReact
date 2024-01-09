import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  const tableData = [
    { id: '1', col1: 'Row 1', col2: 'Data A', col3: 'Data X' },
    { id: '2', col1: 'Row 2', col2: 'Data B', col3: 'Data Y' },
    { id: '3', col1: 'Row 3', col2: 'Data C', col3: 'Data Z' },
    // Ajoutez autant d'objets que nécessaire pour les lignes du tableau
  ];
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.col1}</Text>
      <Text style={styles.cell}>{item.col2}</Text>
      <Text style={styles.cell}>{item.col3}</Text>
    </View>
  );

  return (
    <ScrollView>
      <Text style={styles.br} />
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Image style={styles.pp} source={require("./assets/icon.png")} />
        </View>

        <View style={styles.rightBox}>
          <Text style={styles.h1}>Toni PASTRE</Text>
          <Text>07 62 47 53 14</Text>
          <Text>pastre.toni@gmail.com</Text>
        </View>

      </View>

      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Text>Résumée</Text>
        </View>

        <View style={styles.rightBox}>
          <Text style={styles.br}>Je viens d'obtenir mon diplôme de BTS SIO SLAM du lycée professionnel Charles Peguy à Marseille. À présent, je suis à la recherche d'une structure sérieuse qui me donnera l'opportunité d'une alternance dans le domaine du développement web. Ma curiosité et mon pragmatisme me permettent d'apporter une aide précieuse pour accompagner les équipes sur les problèmes informatiques. Je souhaite me perfectionner davantage dans le développement informatique et contribuer activement au domaine du web.</Text>
        </View>

      </View>

      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Header 1</Text>
          <Text style={styles.headerCell}>Header 2</Text>
          <Text style={styles.headerCell}>Header 3</Text>
        </View>

        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  red: {
    backgroundColor: "red"
  },
  pp: {
    width: 70,
    height: 70,
    backgroundColor: "grey",
    borderRadius: 100

  },
  br: {
    marginTop: 10
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 4
  },
  leftBox: {
    flex: 1, // 20% de l'espace disponible
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    flex: 4, // 80% de l'espace disponible
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
  },
});
