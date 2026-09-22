import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: "matheus",
  idade: "18",
  cidade: "cascavel"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <text>{eu.idade}</text>
      <text>{eu.cidade}</text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
