import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

const CallOutCustom = ({marker}) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.titulo}>{marker.nome}</Text>
      <Text style={styles.descricao}>{marker.descricao}</Text>
    </View>
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.botaoDetalhes}>
        <Text style={styles.textDetalhes}>Clique para detalhes</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default CallOutCustom
