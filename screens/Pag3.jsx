import React from 'react'
import { Button } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper'

export const Pag3 = ({navigation}) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="alien" />;
  const alunos = ["pedro", "cleber", "joao"];

  return (
    <>

    <Button title="Pagina2" onPress={()=>navigation.navigate('Pg2')}/>
  
   <Card style={{marginBottom: 20}}>
        <Card.Title
          title="Pedro"
          subtitle="Peixeiro"
          left={LeftContent}
        />
      </Card>
      <Button title="Pagina1" onPress={()=>navigation.navigate('Pg1')}/>
   <Card style={{marginBottom: 20}}>
        <Card.Title
          title="Cleber"
          subtitle="Cabeleleiro"
          left={LeftContent}
        />
      </Card>
   <Card style={{marginBottom: 20}}>
        <Card.Title
          title="Joao"
          subtitle="Jardinehiro"
          left={LeftContent}
        />
      </Card>
    </>
  )
}
