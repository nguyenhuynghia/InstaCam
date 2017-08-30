import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  navContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: 'green'
  },
  contentContainer: {
    flex: 1
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
  navigationBar: {
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: '#f6f6f6',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5
  },
  navigationBarContent: {
    position: 'absolute',
    flex: 1,
    top: Metrics.navbarTop,
    left: 10,
    right: 10,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftButtons: {
    justifyContent: 'flex-start',
    width: 50,
    flexDirection: 'row'
  },
  naviButton: {
    height: 40,
    justifyContent: 'center'
  },
  cancelButtonTitle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: '#2A2A2A',
    textAlign: 'left'
  },
  rightButtons: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 50
  },
  nextButtonTitle: {
    fontSize: 14,
    color: '#2A2A2A',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  titleViewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})
