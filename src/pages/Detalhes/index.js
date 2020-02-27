import React, { Component } from 'react'
import { View, Text, Image, Linking, ScrollView, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements'

import { Background, Botao } from '../../components'

import styles from './styles'
import distance from '../../services/distance'
import { colors } from '../../styles'

export default class Detalhes extends Component {
  state = {
    region: this.props.navigation.getParam('region', {}),
    marker: this.props.navigation.getParam('item', {}),
    loading: true,
    distancia: {},
    duracao: {}
  }

  getDistanceData = async () => {
    const response = await distance.get(`/distancematrix/json?units=metrics&origins=${this.state.region.latitude},${this.state.region.longitude}&destinations=${this.state.marker.local[0]},${this.state.marker.local[1]}&language=pt-BR&key=AIzaSyDmCbqIQsK0-TUGokX9BqowwsrGHEv3920`)
    return response.data
  }

  async componentDidMount() {
    if (this.state.loading) {
      const { rows } = await this.getDistanceData()
      this.setState({ distancia: rows[0].elements[0].distance, duracao: rows[0].elements[0].duration, loading: false })
    }
  }

  render() {
    const { marker, loading, distancia, duracao } = this.state
    const valor = 2.50 + (1.2*distancia.value/1000) + (0.14*duracao.value/60)
    
    return(
      <Background>
        <View style={styles.container}>
        <Image style={styles.image} source={{uri: marker.imagem}} />
          <View style={styles.titleContainer}><Text style={styles.title}>{marker.nome}</Text></View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {loading ? <View style={styles.loading}><ActivityIndicator size="large" color={colors.secundaria}/></View> : <View style={styles.infoContainer}>
              <View style={styles.infoEnderecoContainer}>
                <Icon name="map-pin" type="font-awesome" color={colors.danger} size={22} style={styles.infoIconEndereco} />
                <Text style={styles.infoText}>{marker.endereco}</Text>
              </View>
              <View style={styles.infoDescricaoContainer}>
                <Icon name="align-justify" type="font-awesome" size={22} style={styles.infoIconDescricao} />
                <Text style={styles.infoText}>{marker.descricao}</Text>
              </View>
              <View style={styles.infoEstimateContainer}>
                <View style={styles.estimates}>
                  <Icon name="cash-multiple" type="material-community" size={12} style={styles.infoIconEstimate} />
                  <Text style={styles.estimatesText}>{`R$ ${Math.trunc(valor)-2}-${Math.trunc(valor)+3}`}</Text>
                </View>
                <View style={styles.estimates}>
                  <Icon name="timer" type="material-community" size={15} style={styles.infoIconEstimate} />
                  <Text style={styles.estimatesText}>{duracao.text}</Text>
                </View>
                <View style={styles.estimatesSemBorda}>
                  <Icon name="run" type="material-community" size={15} style={styles.infoIconEstimate} />
                  <Text style={styles.estimatesText}>{distancia.text}</Text>
                </View>
              </View>
              <View style={styles.botaoContainer}>
                <Botao onPress={() => Linking.openURL(marker.link)} title="Aventure-se com o Uber" style={styles}/>             
              </View>
            </View>}
          </ScrollView>
        </View>
      </Background>
    )
  }
}
