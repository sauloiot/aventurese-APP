import React, { Component } from 'react'

import { View, Text, FlatList } from 'react-native'
import ListaItem from './ListaItem'

import Header from '../../components/Header'
import styles from './styles'

import Background from '../../components/Background'

export default class Lista extends Component {

  state = {
    region: this.props.screenProps.region,
    markers: this.props.screenProps.markers
  }
  
  renderListItem = ({item}) => <ListaItem marker={item} onPress={() => this.props.navigation.navigate('Detalhes', {item, region:this.state.region})} />
  
  render() {
    return(
      <Background>
        <Header title="Pontos Turísticos - Alagoas"/>
        <View style={styles.container}>
          <FlatList data={this.state.markers} keyExtractor={marker => String(marker._id)} renderItem={this.renderListItem} />
        </View>
      </Background>
    )
  }
}
