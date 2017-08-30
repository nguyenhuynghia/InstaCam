import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'

import { CameraKitGallery, CameraKitGalleryView } from 'react-native-camera-kit'
import { Colors } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { styles } from './Styles/GalleryScreenStyle'

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource')
const {width, height} = Dimensions.get('window')

export default class GalleryScreenNative extends Component {
  static navigationOptions = {
    title: 'Gallery'
  }

  constructor (props) {
    super(props)
    this.state = {
      album: props.selectedAlbum,
      images: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    this.gallery.setal
    this.setState({
      album: nextProps.selectedAlbum
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <CameraKitGalleryView
          ref={(gallery) => {
            this.gallery = gallery
          }}
          style={{flex: 1, margin: 0, backgroundColor: Colors.background, height: height, paddingVertical: 2}}
          albumName={this.state.album}
          minimumInteritemSpacing={2}
          minimumLineSpacing={2}
          columnCount={4}
          selectedImages={Object.keys(this.state.images)}
          onSelected={(result) => {
            console.log(result)
          }}
          onTapImage={event => this.onTapImage(event)}
          selection={{
            overlayColor: Colors.clear,
            imagePosition: 'bottom-right',
            imageSizeAndroid: 'large',
            enable: (Object.keys(this.state.images).length < 2)
          }}
          fileTypeSupport={{
            supportedFileTypes: ['image/jpeg', 'image/png'],
            unsupportedOverlayColor: '#000000',
            unsupportedTextColor: '#ff0000'
          }}
        />
      </View>
    )
  }

  async onTapImage (event) {
    const image = await CameraKitGallery.getImageForTapEvent(event.nativeEvent)

    if (image) {
      console.log('onTapImage', image)
      this.props.didPickImage(image.imageUri)
      // this.setState({
      //     selectedImage: image
      //   }
      // )
    }
  }
}
