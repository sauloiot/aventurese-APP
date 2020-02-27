import React from "react"
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import posed from "react-native-pose"

import colors from '../../styles/colors'

const tamanhoTela = Dimensions.get("window").width
const fatiaTela = tamanhoTela / 2
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: fatiaTela },
})

const Scaler = posed.View({
  active: { scale: 1.25 },
  inactive: { scale: 1 }
})

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 52,
    elevation: 2,
    alignItems: "center",
    backgroundColor: colors.primaria
  },
  tabButton: { flex: 1 },
  spotLight: {
    width: fatiaTela,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  spotLightInner: {
    width: 48,
    height: 48,
    backgroundColor: colors.whiteTransparent,
    borderRadius: 24
  },
  scaler: { flex: 1, alignItems: "center", justifyContent: "center" }
})

const TabBar = props => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props

  const { routes, index: activeRouteIndex } = navigation.state

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`}>
          <View style={styles.spotLightInner} />
        </SpotLight>
      </View>

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor

        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <Scaler
              pose={isRouteActive ? "active" : "inactive"}
              style={styles.scaler}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </Scaler>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
