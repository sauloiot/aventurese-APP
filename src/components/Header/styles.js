import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    height: 57,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.whiteTransparent
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  }
})

export default styles
