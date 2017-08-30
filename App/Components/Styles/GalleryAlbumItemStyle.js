import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
  },
  contentContainter: {
    height: 80,
    flexDirection: 'row'
  },
  thumbnail: {
    top: 5,
    left: 5,
    width: 70,
    height: 70
  },
  albumDetail: {
    justifyContent: 'center',
    padding: 10
  },
  albumName: {
    fontSize: 16
  },
  imageCount: {
    fontSize: 12
  }

})
