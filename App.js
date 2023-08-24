import { StatusBar } from 'expo-status-bar';
import { Button ,ScrollView, StyleSheet, Text, View } from 'react-native';
import { Pag3 } from './screens/Pag3';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <ScrollView style={{ margin: 10}}>
     
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      
      
      
      />


      </Stack.Navigator>
     </NavigationContainer>
      
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
