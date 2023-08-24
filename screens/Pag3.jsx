import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

export const Pag3 = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="alien" />;
  const alunos = ["pedro", "cleber", "joao"];
  return (
    <>
   <Card style={{marginBottom: 20}}>
        <Card.Title
          title="Pedro"
          subtitle="Peixeiro"
          left={LeftContent}
        />
      </Card>
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
