import React from "react";
import { Button } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

export const Pag2 = ({navigation}) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <>
    <Button title="Pagina3" onPress={()=>navigation.navigate('Profile')}/>
      <Card style={{marginBottom: 20}}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Button title="Pagina1" onPress={()=>navigation.navigate('Pg1')}/>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={{marginBottom: 20}}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
};
