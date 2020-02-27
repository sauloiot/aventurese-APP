import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius*2,
    padding: 8,
    marginHorizontal: metrics.baseMarginHorizontalPercent,
    marginTop: metrics.baseMargin/2,
    flexDirection: "row"
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker
  },

  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: metrics.baseMarginHorizontalPercent,
    width: 40,
    height: 40
  },

  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: metrics.baseMarginHorizontalPercent
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIconEndereco: {
    color: colors.danger,
    marginLeft: metrics.baseMarginHorizontalPercent,
    width: 10,
    height: 10
  },

  infoIconDescricao: {
    marginLeft: metrics.baseMarginHorizontalPercent,
    width: 10,
    height: 10
  },

  icon: {
    width: 45,
    height: 45,
    borderRadius: 50
  },

  infoText: {
    flex: 1,
    color: colors.darker,
    fontSize: 12,
    marginLeft: metrics.baseMargin/2,
    flexWrap: "wrap"
  }
})

export default styles
