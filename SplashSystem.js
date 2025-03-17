import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class SplashSystem extends Component {
  render() {
    return (
      <View>
      <Image source={require('./assets/images/shape.png')} style={styles.shapeImage} />
      <Image source={require('./assets/images/hero.png')} style={styles.heroImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}> Gets things with TODs</Text>
        <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Get Started</Text>
      </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    shapeImage:{},
    heroImage:{
        margin: "auto",
        marginTop:78
    },
    contentContainer:{
        maxWidth:213,
        marginTop:65,
        margin: "auto"
    },
    title:{
       textAlign:"center",
       fontWeight:"bold",
       fontSize:18,
       marginBottom:16 
    },
    content:{
        textAlign:"center",
        fontsize:13
    },
    buttonContainer:{
        backgroundColor:"#50C2C9",
        marginTop:136,
        paddingVertical:16,
        borderRadius: 8,
        marginHorizontal:23
        
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    }

})