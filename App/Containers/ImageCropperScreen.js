import React from 'react'
import { ImageCrop } from '../Lib/react-native-image-cropper'
import { Dimensions, View } from 'react-native'
// Styles
const {width, height} = Dimensions.get('window')

export default class ImageCropperScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 1
    }
  }

  crop = () => {
    return new Promise((resolve, reject) => {
      this.refs.cropper.crop()
        .then(captured => {
          resolve(captured)
        })
    })
  }

  render () {
    let imageUrl = this.props.imageUrl
    let imageCropper = null
    if (imageUrl) {
      imageCropper = <ImageCrop
        ref={'cropper'}
        image={ imageUrl}
        cropHeight={width}
        cropWidth={width}
        quality={1.0}
        zoom={this.state.zoom}
        maxZoom={80}
        minZoom={20}
        panToMove={true}
        pinchToZoom={true}
        format="file"
      />
    }

    return (
      <View style={{flex: 1} }>
        {imageCropper}
      </View >
    )
  }
}

