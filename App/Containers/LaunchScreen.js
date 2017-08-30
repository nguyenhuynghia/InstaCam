import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Metrics } from '../Themes'
import { Actions } from 'react-native-router-flux'
// Styles

export default class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pickImageData: null
    }
  }

  render () {
    let pickImage = this.state.pickImageData
    return (
      <View style={{width: Metrics.screenWidth, height: Metrics.screenHeight, top: Metrics.navBarHeight}}>
        <Image style={{
          height: Metrics.screenWidth,
          height: Metrics.screenWidth,
          marginBottom: 10,
          backgroundColor: Colors.cloud
        }}
               source={{uri: pickImage || ' '}}/>
        <View style={{width: Metrics.screenWidth, height: 100, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{
            width: 200,
            height: 50,
            backgroundColor: Colors.facebook,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'black',
            borderRadius: 10
          }} onPress={() => {
            Actions.imagePickerScreen({
              didFinishPickImage: (image) => {
                console.log(image)
                this.setState({
                  pickImageData: image
                })
                Actions.pop()
              }
            })
          }}>
            <Text>Open image picker</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
