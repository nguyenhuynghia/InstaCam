import React, { Component } from 'react'
import { CameraKitCameraScreen } from 'react-native-camera-kit'
import { Actions } from 'react-native-router-flux'

import styles from './Styles/CameraScreenStyle'

export default class CameraScreen extends Component {
  static navigationOptions = {
    title: 'Photo'
  }

  async onBottomButtonPressed (event) {
    let image = event.image
    if (image) {
      this.props.didPickImage(image.uri)
    }
  }

  render () {
    return (
      <CameraKitCameraScreen
        style={styles.cameraView}
        ref={cam => this.camera = cam}
        onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('../Images/Camera/flashOn.png'),
          off: require('../Images/Camera/flashOff.png'),
          auto: require('../Images/Camera/flashAuto.png')
        }}
        cameraOptions={{
          focusMode: 'on',               // off/on(default)
          ratioOverlay: '1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
          ratioOverlayColor: 'black' // optional
        }}
        cameraFlipImage={require('../Images/Camera/cameraFlipIcon.png')}
        captureButtonImage={require('../Images/Camera/cameraButton.png')}
      />
    )
  }
}
