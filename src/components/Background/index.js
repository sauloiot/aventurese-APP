import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

import { colors } from '../../styles'

export default styled(LinearGradient).attrs({
  colors: [colors.gradientColor1, colors.gradientColor2],
})`
  flex: 1
`
