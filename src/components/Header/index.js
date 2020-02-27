import React from 'react'

import { View, Text } from 'react-native'

import styles from './styles'

const Header = ({title}) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
)

export default Header
