import React, { Component, } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import { CallOutCustom } from '../../components'
import styles from './styles'
import { colors } from '../../styles'

const GOOGLE_MAPS_APIKEY = "AIzaSyDmCbqIQsK0-TUGokX9BqowwsrGHEv3920"

export default class Mapa extends Component {
  state = {
    region: this.props.screenProps.region,
    markers: this.props.screenProps.markers,
    route: false,
    loading: true,
    latitudey: 0,
    longitudey: 0,
    distance: 0,
    duration: 0,
  }

  handleMarkerPress(event) {
    this.setState({ longitudey: event.longitude, latitudey: event.latitude, route: true })
  }

  handleMapPress() {
    if (this.state.route) this.setState({route:false})
  }

  render() {
    const { region, latitudey, longitudey, markers, route } = this.state
    return (
      <MapView style={{ flex: 1 }}
        region={region}
        showsUserLocation={true}
        loadingEnabled
        onPress={() => this.handleMapPress()}
      >
        {markers.map(marker => (
          <Marker
            key={marker._id}
            coordinate={{
              latitude: marker.local[0],
              longitude: marker.local[1]
            }}
            title={marker.nome}
            description={marker.descricao}
            onPress={(event) => this.handleMarkerPress(event.nativeEvent.coordinate)}
          >
            <Callout style={styles.callout} onPress={() => this.props.navigation.navigate('Detalhes', {item:marker, region})}>
              <CallOutCustom marker={marker}/>
            </Callout>
          </Marker>))}
        {(route) && (<MapViewDirections
          origin={region}
          destination={{ latitude: latitudey, longitude: longitudey }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor={colors.danger}
        />)}
      </MapView>
    )
  }
}
