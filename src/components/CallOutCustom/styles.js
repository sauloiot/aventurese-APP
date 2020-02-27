import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column'
  },

  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },

  infoContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black
  },

  textDetalhes: {
    fontSize: 10
  },

  botaoDetalhes: {
    padding: 1
  },

  descricao: {
    fontSize: 12,
    color: colors.dark  
  }
})

export default styles
