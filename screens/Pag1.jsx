import React from 'react'
import Card from '../components/Card'
import { Button, Text } from 'react-native'


const Pag1 = ({navigation}) => {
  return (
    <>
    <Button title="Pagina3" onPress={()=>navigation.navigate('Profile')}/>
     <Card titulo="BOBINHo" text="não tankei">
        <Text>paragrafo1</Text>
        <Text>paragrafo2</Text>
        <Text>paragrafo3</Text>
      </Card>
      <Button title="Pagina2" onPress={()=>navigation.navigate('Pg2')}/>
      <Card titulo="eu tenho medo" text="de andar no escuro"></Card>
      <Card titulo="jose" text="joaoEstrela"></Card>
    </> 
  )
}

export default Pag1