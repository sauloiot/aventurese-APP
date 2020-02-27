import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Botao = ({onPress, title, style = styles}) => (
  <LinearGradient start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 0.0}} locations={[0,0.4,0.8]} colors={['#76797F', '#34363A', '#000000']} style={style.botao}>
    <TouchableOpacity onPress={onPress}>
      <Text style={style.botaoTexto}>{title}</Text>
    </TouchableOpacity>
  </LinearGradient>
)

export default Botao
