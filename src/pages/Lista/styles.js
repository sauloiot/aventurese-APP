import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteTransparent
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  }
})

export default styles
