import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SplashSystem from './SplashSystem'

export class App extends Component {
  render() {
    return (
      <View>
        <Text>
          <SplashSystem/>
        </Text>
      </View>
    )
  }
}

export default App