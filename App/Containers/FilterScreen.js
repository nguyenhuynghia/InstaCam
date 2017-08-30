import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
// import RNFS from 'react-native-fs'
import { Surface } from 'gl-react-native'
import {
  Amaro,
  Brannan,
  Earlybird,
  F1977,
  Hefe,
  Hudson,
  Inkwell,
  Lokofi,
  LordKelvin,
  Nashville,
  Normal,
  Rise,
  Sierra,
  Sutro,
  Toaster,
  Valencia,
  Walden,
  XproII
} from '../Lib/gl-react-instagramfilters'
// Styles
import styles from './Styles/FilterScreenStyle'
import { Colors, Metrics } from '../Themes'
var RNFS = require('react-native-fs')

const {Image: GLImage} = require('gl-react-image')

//noinspection JSAnnotator
const filters = [
  {
    name: 'Normal',
    component: Normal,
    props: {}
  },
  {
    name: 'Brannan',
    component: Brannan,
    props: {}
  },
  {
    name: 'Earlybird',
    component: Earlybird,
    props: {}
  },
  {
    name: 'F1977',
    component: F1977,
    props: {}
  },
  {
    name: 'Hudson',
    component: Hudson,
    props: {}
  },
  {
    name: 'Inkwell',
    component: Inkwell,
    props: {}
  },
  {
    name: 'Lokofi',
    component: Lokofi,
    props: {}
  },
  {
    name: 'LordKelvin',
    component: LordKelvin,
    props: {}
  },
  {
    name: 'Nashville',
    component: Nashville,
    props: {}
  },
  {
    name: 'Rise',
    component: Rise,
    props: {}
  },
  {
    name: 'Sierra',
    component: Sierra,
    props: {}
  },
  {
    name: 'Sutro',
    component: Sutro,
    props: {}
  },
  {
    name: 'Toaster',
    component: Toaster,
    props: {}
  },
  {
    name: 'Valencia',
    component: Valencia,
    props: {}
  },
  {
    name: 'Walden',
    component: Walden,
    props: {}
  },
  {
    name: 'XproII',
    component: XproII,
    props: {}
  }
]
export default class FilterScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeFilter: 'Normal',
      imageUrl: props.imageUrl,
      imageSize: {width: 600, height: 600} // {width: 1920, height: 1920}
    }
  }

  onFilterSelected (filter) {
    this.setState({
      activeFilter: filter
    })

    // @see https://projectseptemberinc.gitbooks.io/gl-react/content/docs/api/Surface.html
    // let opts = {
    //   format: "file",
    //   filePath: `${RNFS.DocumentDirectoryPath}/temp.png`
    // }
    //
    // console.log(opts)
    // this.refs.img.captureFrame(opts).then(file => {
    //   console.log(file)
    // });
  }

  renderActiveFilter () {
    let image = <GLImage
      style={{flex: 1, backgroundColor: Colors.clear}}
      source={this.state.imageUrl}
      imageSize={this.state.imageSize}
      resizeMode="cover"/>

    if (this.state.activeFilter === 'Normal') {
      return <Normal inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Amaro') {
      return <Amaro inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Brannan') {
      return <Brannan inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Earlybird') {
      return <Earlybird inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'F1977') {
      return <F1977 inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Hefe') {
      return <Hefe inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Hudson') {
      return <Hudson inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Inkwell') {
      return <Inkwell inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Lokofi') {
      return <Lokofi inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'LordKelvin') {
      return <LordKelvin inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Nashville') {
      return <Nashville inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Normal') {
      return <Normal inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Rise') {
      return <Rise inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'S1977') {
      return <S1977 inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Saturate') {
      return <Saturate factor={0.7} inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Sierra') {
      return <Sierra inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Sutro') {
      return <Sutro inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Valencia') {
      return <Valencia inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Walden') {
      return <Walden inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'Toaster') {
      return <Toaster inputImageTexture={image}/>
    } else if (this.state.activeFilter === 'XproII') {
      return <XproII inputImageTexture={image}/>
    } else {
      throw 'Unsupported filter'
    }
  }

  filterImage = () => {
    const captureConfig = {
      quality: 0.9,
      format: 'base64'
    }
    RNFS.unlink(this.props.imageUrl)
    return this.refs.img.captureFrame(captureConfig)
  }

  render () {
    let activeFilter = this.renderActiveFilter()
    let displayer = <Surface backgroundColor="transparent" ref="img" width={Metrics.screenWidth}
                             height={Metrics.screenWidth}>
      {activeFilter}
    </Surface>
    if (this.state.didTouchedIn === true) {
      let image = <GLImage
        source={this.state.imageUrl}
        imageSize={this.state.imageSize}
        resizeMode="cover"/>
      displayer =
        <Surface backgroundColor="transparent" ref="img" width={Metrics.screenWidth} height={Metrics.screenWidth}>
          <Normal inputImageTexture={image}/>
        </Surface>
    }
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity activeOpacity={1.0}
                          onPressIn={() => {
                            this.setState({
                              didTouchedIn: true
                            })
                          }}
                          onPressOut={() => {
                            this.setState({
                              didTouchedIn: false
                            })
                          }}>
          {displayer}
        </TouchableOpacity>
        <ScrollView
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
          horizontal={true}>
          {filters.map(f => {
            let image = <GLImage
              source={this.state.imageUrl}
              imageSize={this.state.imageSize}
              resizeMode="cover"/>

            return <TouchableOpacity
              activeOpacity={0.7}
              key={f.name}
              style={{padding: 1}}
              onPress={this.onFilterSelected.bind(this, f.name)}>
              <Text style={{
                textAlign: 'center',
                color: f.name === this.state.activeFilter ? 'gray' : 'black'
              }}>
                {f.name}
              </Text>
              <Surface backgroundColor="transparent" width={90} height={90}>
                <f.component
                  inputImageTexture={image}
                  {...f.props}
                />
              </Surface>
            </TouchableOpacity>
          })}
        </ScrollView>
      </View>
    )
  }
}
