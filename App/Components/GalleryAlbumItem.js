import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles/GalleryAlbumItemStyle'

export default class GalleryAlbumItem extends React.Component {
  constructor (props) {
    super(props)
    console.log('props', props)
  }

  render () {
    return (
      <TouchableOpacity onPress={() => this.props.onSelectedItem()}>
        <View style={styles.contentContainter}>
          <Image style={styles.thumbnail} resizeMode='cover'
                 source={{uri: `data:image/gif;base64,${this.props.data.image}`}}/>
          <View style={styles.albumDetail}>
            <Text style={styles.albumName}>{this.props.data.albumName}</Text>
            <Text style={styles.imageCount}>{this.props.data.imagesCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// GalleryAlbumItem.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// GalleryAlbumItem.defaultProps = {
//   someSetting: false
// }
