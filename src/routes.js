import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { TabBar } from './components'
import colors from './styles/colors'

import { Mapa, Lista, Detalhes } from './pages'

const Locais = createStackNavigator({
  Lista: {
    screen: Lista,
    navigationOptions: {
      headerTransparent: true
    }
  },
  Detalhes: {
    screen: Detalhes,
    navigationOptions: {
      headerTransparent: true
    }
  }
})

Locais.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index != 0) tabBarVisible = false

  return {
    tabBarVisible,
  }
}

const Maps = createStackNavigator({
  Mapa: {
    screen: Mapa,
    navigationOptions: {
      headerTransparent: true
    }
  },
  Detalhes: {
    screen: Detalhes,
    navigationOptions: {
      headerTransparent: true
    }
  }
})

Maps.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index != 0) tabBarVisible = false

  return {
    tabBarVisible,
  }
}

const Routes = createAppContainer(createBottomTabNavigator(
  {
    Mapa: {
      screen: Maps,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="map" size={30} color={tintColor} />
      }
    },
    Locais: {
      screen: Locais,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: colors.danger,
      inactiveTintColor: colors.danger
    }
  }
))

export default Routes 
