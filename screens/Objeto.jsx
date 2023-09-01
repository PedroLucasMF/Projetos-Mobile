import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {


    const nome = 'Pedro'
    const idade = 20

    const carros = [
        {marca:'VW', modelo:'Chevete', ano:'1999', cor:'marrom', foto:'https://motortudo.com/wp-content/uploads/2022/08/chevette-marrom-21.webp'},
        {marca:'FD', modelo:'Gol', ano:'1939', cor:'Preto', foto:'https://image1.mobiauto.com.br/images/api/images/v1.0/271755151/transform/fl_progressive,f_webp,q_80,w_600'},
        {marca:'WE', modelo:'Fusca', ano:'1988', cor:'Preto', foto:'https://cdn.pixabay.com/photo/2017/10/03/17/26/vw-2813334_1280.jpg'},
        {marca:'WE', modelo:'Celta', ano:'1988', cor:'Azul', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQQGoPuC9KOa8BxHR15x1xJUwqHATWck2LEOUj19K0G5woJ__AZ6NynpMOUUQnIjNjRo&usqp=CAU'},
        {marca:'RT', modelo:'Opala', ano:'1998', cor:'Vermelho', foto:'https://s3.ecompletocarros.dev/images/lojas/364/veiculos/91386/veiculoInfoVeiculoImagesMobile/vehicle_image_1647133572_309f2846a25a1339395df0a4397acf94.jpeg'},
    ]

  return (
    <>
    {carros.map(item =>(
    <>
      <Card>
        <Card.Cover source={{uri: item.foto}} />
        <Card.Content>
          <Text variant='titleLarge'>Marca: {item.marca}</Text>
          <Text variant='titleLarge'>Modelo: {item.modelo}</Text>
          <Text variant='bodyMedium'>Ano: {item.ano}</Text>
          <Text variant='bodyMedium'>Cor: {item.cor}</Text>
        </Card.Content>
      </Card>
        
    </>
    ))}

    </>
  )
}

export default Objeto