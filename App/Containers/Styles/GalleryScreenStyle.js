import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: 'green'
  },
  contentContainer: {
    position: 'absolute',
    top: Metrics.navbarTop,
    left: 10,
    right: 10,
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'left',
    color: Colors.snow,
    paddingLeft: 10,
    paddingTop: Metrics.smallMargin,
    marginRight: 0,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: 18
  },
  rightButtons: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  leftButtons: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
})
