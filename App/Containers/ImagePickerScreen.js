import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import GalleryScreen from './GalleryScreen'
import CameraScreen from './CameraScreen'
import { Colors, Images } from '../Themes'
import styles from './Styles/ImagePickerScreenStyle'
import { CameraKitGallery } from 'react-native-camera-kit'
import AlbumsScreen from './AlbumsScreen'
import { Actions } from 'react-native-router-flux'
import ImageCropperScreen from './ImageCropperScreen'
import FilterScreen from './FilterScreen'
// Styles
const CurrentStepPickImage = 0
const CurrentStepCropImage = 1
const CurrentStepFilterImage = 2

var ScrollableTabView = require('react-native-scrollable-tab-view')

class ImagePickerScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      albums: [],
      selectedAlbum: '',
      currentTab: 'galleryScreen',
      didPresentAlbums: false,
      currentStep: CurrentStepPickImage,
      pickImageUrl: '',
      cropImageUrl: '',
      resultImageUrl: ''
    }
  }

  componentWillMount () {
    CameraKitGallery.requestDevicePhotosAuthorization().then(isAuthozise => {
      if (isAuthozise) {
        CameraKitGallery.getAlbumsWithThumbnails().then(_albums => {
          console.log(_albums)
          let albums = _albums.albums
          if (albums && albums.length > 0) {
            let album = albums[0]
            if (album) {
              this.setState({albums: albums, selectedAlbum: album.albumName})
            }
          }
        })
      }
    })
  }

  nextStep = () => {
    var currentStep = this.state.currentStep
    if (currentStep === CurrentStepFilterImage) {
      this.refs.filterScreen.filterImage().then(imageUrl => {
        if(this.props.didFinishPickImage) {
          this.props.didFinishPickImage(imageUrl)
        }
      })
    } else if (currentStep === CurrentStepCropImage) {
      this.refs.imageCropperScreen.crop().then(imageUrl => {
        currentStep += 1
        this.setState({
          cropImageUrl: imageUrl,
          currentStep: currentStep
        })
      })
    } else if (currentStep === CurrentStepPickImage) {
      currentStep += 1
      this.setState({
        currentStep: currentStep
      })
    }
  }

  previousStep = () => {
    var currentStep = this.state.currentStep
    if (currentStep === CurrentStepPickImage) {
      Actions.pop()
    } else {
      currentStep -= 1
      this.setState({
        currentStep: currentStep
      })
    }
  }

  render () {
    let screen = null
    switch (this.state.currentStep) {
      case CurrentStepPickImage: {
        screen = (
          <ScrollableTabView
            onChangeTab={this.handleChangeTab}
            tabBarPosition="bottom"
            tabBarTextStyle={{color: 'gray'}}
            tabBarUnderlineStyle={{backgroundColor: Colors.clear}} underlayColor={Colors.snow}>
            <GalleryScreen ref="galleryScreen" tabLabel="Gallery" selectedAlbum={this.state.selectedAlbum}
                           didPickImage={(imageUrl) => {
                             console.log('didPickImage', imageUrl)
                             this.setState({
                               pickImageUrl: imageUrl
                             })
                             this.nextStep()
                           }}/>
            <CameraScreen ref="cameraScreen" tabLabel="Photo" didPickImage={(imageUrl) => {
              console.log('didPickImage', imageUrl)
              this.setState({
                pickImageUrl: imageUrl
              })
              this.nextStep()
            }}/>
          </ScrollableTabView>
        )
      }
        break

      case CurrentStepCropImage: {
        screen =
          <ImageCropperScreen ref="imageCropperScreen" imageUrl={this.state.pickImageUrl} didCropImage={(imageUrl) => {
            console.log('didCropImage', imageUrl)
            this.setState({
              cropImageUrl: imageUrl
            })
          }
          }/>
      }
        break

      case CurrentStepFilterImage: {
        screen = <FilterScreen ref="filterScreen" imageUrl={this.state.cropImageUrl}/>
      }
        break
    }
    return (
      <View style={styles.contentContainer}>
        {this.renderGalleryNavi()}
        {screen}
        {this.state.didPresentAlbums ? <AlbumsScreen data={this.state.albums}
                                                     didSelectedAlbum={(album) => {
                                                       this.setState({
                                                         didPresentAlbums: false,
                                                         selectedAlbum: album.albumName
                                                       })
                                                     }}/> : null}
      </View>
    )
  }

  handleChangeTab = ({i, ref, from}) => {
    this.setState({
      currentTab: ref.ref
    })
  }

  renderGalleryNavi () {
    let titleView = null
    let rightButton = <Text style={styles.nextButtonTitle}>Next</Text>
    let leftButton = <Text style={styles.cancelButtonTitle}>Cancel</Text>
    let {currentStep} = this.state
    switch (currentStep) {
      case CurrentStepPickImage: {
        // rightButton = null
        if (this.state.currentTab === 'galleryScreen') {
          titleView = (
            <TouchableOpacity onPress={() => {
              // if (this.state.albums.length > 1) {
              this.setState({
                didPresentAlbums: true
              })
              // }
            }}>
              <Text style={styles.titleText}>{this.state.selectedAlbum}</Text>
            </TouchableOpacity>
          )
        } else if (this.state.currentTab === 'cameraScreen') {
          titleView = <Text style={styles.titleText}>Photo</Text>
        }
        rightButton = null
      }
        break

      case CurrentStepCropImage: {
        titleView = <Text style={styles.titleText}>Crop</Text>
        leftButton = <Image source={Images.backButton}/>
      }
        break

      case CurrentStepFilterImage: {
        titleView = <Text style={styles.titleText}>Edit</Text>
        rightButton = <Text style={styles.titleText}>Done</Text>
        leftButton = <Image source={Images.backButton}/>
      }
        break
    }

    return (
      <View style={styles.navigationBar}>
        <View style={styles.navigationBarContent}>
          <View style={styles.leftButtons}>
            <TouchableOpacity style={styles.naviButton} onPress={() => {
              this.previousStep()
            }}>
              {leftButton}
            </TouchableOpacity>
          </View>
          <View style={styles.titleViewWrapper}>
            {titleView}
          </View>
          <View>

          </View>
          <View style={styles.rightButtons}>
            <TouchableOpacity style={styles.naviButton} onPress={() => {
              this.nextStep()
            }}>
              {rightButton}
            </TouchableOpacity>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImagePickerScreen)
