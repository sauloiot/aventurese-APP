import React, { Component, } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Geolocation from "@react-native-community/geolocation"

import Routes from './routes'
import api from './services/api'
import colors from './styles/colors'

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  }
})

export default class App extends Component {
  state = {
    region: {
        latitude: 124,
        longitude: 124,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
    },
    watchID: 0,
    markers: [],
    loading: true
  }

  async componentDidMount() {
    this.load()
  }

  load = async() => {
    Geolocation.watchPosition(({ coords: { latitude, longitude}, watchID }) => {
      this.loadInfos({
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }, watchID)
    } , (error) => {console.log(error)}, {
      timeout: 2000,
      enableHighAccuracy: false,
      maximumAge: 1000,
    })
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.state.watchID)
  }

  loadInfos = async (region, watchID) => {
    let data = await this.getLocationsData(region)
    this.setState({markers: data, region, loading: false, watchID})
  }

  getLocationsData = async (region) => {
      const response = await api.get(`/locais/?local[longitude]=${region.longitude}&local[latitude]=${region.latitude}`)
      return response.data
  }

  render() {
    const { region, markers, loading } = this.state
    return(
      <>{loading ? <View style={styles.conteiner}><ActivityIndicator size="large" color={colors.secundaria}/></View> : <Routes screenProps={{ region, markers }}/>}</>
    )
  }
}
