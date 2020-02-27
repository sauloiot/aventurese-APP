import React from 'react'

import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const ListaItem = ({marker, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={{uri: marker.imagem}} />
    </View>
    <View style={styles.infoContainer}>
    <Text style={styles.title}>{marker.nome}</Text>
      <View style={styles.info}>
        <Icon name="align-justify" size={10} style={styles.infoIconDescricao} />
        <Text style={styles.infoText}>{marker.descricao}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="map-pin" size={10} style={styles.infoIconEndereco} />
        <Text style={styles.infoText}>{marker.endereco}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default ListaItem
