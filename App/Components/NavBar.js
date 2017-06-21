import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Metrics, ApplicationStyles } from '../Themes/'
import styles from './Styles/NavBarStyles'

export default class NavBar extends React.Component {
  // console.log(Dimensions.get('window'))

  render(){
    return(
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require('../Images/checkbox.png')} />
        <Text style ={styles.navBarHeader} > SAFE-AS </Text>
        <Image
          style = {styles.logo} source={require('../Images/hamburger-icon.png')} />
      </View>
    )
  }
}
