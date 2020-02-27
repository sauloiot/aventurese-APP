import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  image: {
    width: '100%', 
    height: '40%',
    alignSelf: 'center',
  },

  botao: {
    marginTop: metrics.baseMarginVerticalPercent,
    marginBottom: '4%',
    alignSelf: 'center',
    borderRadius: 5
  },

  botaoTexto: {
    color: colors.light,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    margin: metrics.baseMargin,
  },

  botaoContainer: {
    flex: 1,
    backgroundColor: colors.lighter,
    justifyContent: 'flex-end',
    width: '100%',
  },

  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },

  infoEnderecoContainer: {
    backgroundColor: colors.light,
    marginHorizontal: metrics.baseMarginHorizontalPercent,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    padding: 6
  },

  infoDescricaoContainer: {
    backgroundColor: colors.light,
    marginHorizontal: metrics.baseMarginHorizontalPercent,
    marginTop: metrics.baseMarginVerticalPercent,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    padding: 6
  },

  infoEstimateContainer: {
    backgroundColor: colors.light,
    marginHorizontal: metrics.baseMarginHorizontalPercent,
    marginTop: metrics.baseMarginVerticalPercent,
    flexDirection: 'row',
    borderRadius: 6,
    padding: 6
  },

  estimates: {
    flex:1,
    alignItems: 'center',
    borderRightWidth: 1,
  },

  estimatesSemBorda: {
    flex:1,
    alignItems: 'center',
  },

  estimatesText: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: '5%'
  },

  titleContainer: {
    backgroundColor: colors.lighter,
    marginVertical: metrics.baseMarginVerticalPercent,
    alignItems: 'center'
  },

  infoIconEndereco: {
    color: colors.danger,
    marginLeft: 2,
    marginRight: 4
  },

  infoText: {
    flex: 1,
    color: colors.darker,
    fontSize: 16,
    marginLeft: metrics.baseMargin/2,
    flexWrap: "wrap"
  }
})

export default styles
