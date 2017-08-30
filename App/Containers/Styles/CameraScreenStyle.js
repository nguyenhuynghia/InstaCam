import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: 'white'
  },
  image: {
    height: Metrics.screenWidth / 4 - 20,
    width: Metrics.screenWidth / 4 - 20
  },
  cameraView: {
    flex: 1
  },
  capture: {
    height: 50,
    width: 50,
    flex: 0,
    borderRadius: 5,
    resizeMode: 'contain',
    padding: 5
  }
})
