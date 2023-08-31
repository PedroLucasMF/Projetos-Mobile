import React from 'react'
import { Text } from 'react-native'

const Objeto = () => {


    const nome = 'Pedro'
    const idade = 20

    const carros = [
        {marca:'VW', modelo:'Chevete', ano:'1999', cor:'marrom'},
        {marca:'FD', modelo:'Gol', ano:'1939', cor:'Preto'},
        {marca:'WE', modelo:'Fusca', ano:'1988', cor:'Preto'},
        {marca:'WE', modelo:'Celta', ano:'1988', cor:'Azul'},
        {marca:'RT', modelo:'Opala', ano:'1998', cor:'Vermelho'},
    ]

  return (
    <>
    {carros.map(item =>(
    <>
        
    </>
    ))}

    </>
  )
}

export default Objeto