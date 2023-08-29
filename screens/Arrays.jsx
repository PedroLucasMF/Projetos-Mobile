import React from 'react'
import { Text } from 'react-native'

const Arrays = () => {


    const nome = 'Pedro'
    const idade = 20

    const carros = ['Chevete', 'Gol', 'Fusca', 'Celta', 'Opala']

    const carro1 = 'Chevete'
    const carro2 = 'Gol'

    const carro = {marca:'VW', modelo:'Chevete', ano:'1999', cor:'marrom'}

  return (
    <>
    {carros.map(item =>(
    <Text>{item}</Text>
    ))}
    </>
  )
}

export default Arrays