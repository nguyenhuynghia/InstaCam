import React from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import GalleryAlbumItem from '../Components/GalleryAlbumItem'
import { Actions } from 'react-native-router-flux'
// Styles
import styles from './Styles/AlbumsScreenStyle'
import {Metrics, Colors} from '../Themes'

class AlbumsScreenScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  _keyExtractor = (item, index) => index
  _renderItem = ({item, index}) => (
    <GalleryAlbumItem data={item} index={index}
                      onSelectedItem={() => {
                        this.props.didSelectedAlbum(item)
                      }}
    />
  )

  render () {
    return (
      <View style={{position: 'absolute', top: Metrics.navBarHeight, left: 0, bottom: 0, right: 0, backgroundColor: 'white'}}>
        <FlatList
          style={styles.listStyle}
          bounces={false}
          data={this.props.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsScreenScreen)
