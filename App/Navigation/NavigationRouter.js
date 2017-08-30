import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
// screens identified by the router
// Camera screens
import LaunchScreen from '../Containers/LaunchScreen'
import ImagePickerScreen from '../Containers/ImagePickerScreen'
import FilterScreen from '../Containers/FilterScreen'
import ImageCropperScreen from '../Containers/ImageCropperScreen'
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene
          key="launchScreen"
          component={LaunchScreen}
          hideNavBar
          initial
        />
        <Scene
          key="imagePickerScreen"
          component={ImagePickerScreen}
          hideNavBar
        />
        <Scene
          title="Edit image"
          key="filterScreen"
          component={FilterScreen}
          hideNavBar={false}
        />
        <Scene
          title="Crop image"
          key="imageCropperScreen"
          component={ImageCropperScreen}
          hideNavBar={false}
        />
      </Router>
    )
  }
}

export default NavigationRouter
