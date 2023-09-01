import { StatusBar } from 'expo-status-bar';
import { Button ,ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pag3 } from './screens/Pag3';
import { Pag2 } from './screens/Pag2';
import Pag1 from './screens/Pag1';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';
import Estado from './screens/Estado';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
  
     
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="objeto" component={Objeto} options={{title: "Obejeto"}}/>  
      <Stack.Screen name="estado" component={Estado} options={{title: "Use State"}}/>  
      <Stack.Screen name="Treco" component={Arrays} options={{title: "Array"}}/>  
      <Stack.Screen name="Profile" component={Pag3} options={{title: "Peixeiro"}}/>
      <Stack.Screen name="Pg2" component={Pag2} options={{title: "Joao"}}/>
      <Stack.Screen name="Pg1" component={Pag1} options={{title: "Cleber"}}/>
      </Stack.Navigator>
     </NavigationContainer>
      
   
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
