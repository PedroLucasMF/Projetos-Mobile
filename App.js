import { StatusBar } from 'expo-status-bar';
import { Button ,ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Butoes from './components/butoes';


export default function App() {
  return (
    <ScrollView style={{ margin: 10 }}>
      <Card titulo="BOBINHo" text="não tankei">
        <text>paragrafo1</text>
        <text>paragrafo2</text>
        <text>paragrafo3</text>
        <Button title='detalhes'/>
      </Card>
      <Card titulo="eu tenho medo" text="de andar no escuro"></Card>
      <Card titulo="jose" text="joaoEstrela"></Card>
      

     

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
