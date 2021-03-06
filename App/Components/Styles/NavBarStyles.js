import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
navbar: {
  backgroundColor: Colors.navbarbg,
  marginBottom: 10,
  flexDirection: 'row',
  height: 80,
  paddingTop: 40,
  paddingLeft: 15,
  paddingRight: 15,
  justifyContent: 'center',
},
logo:{
  width: 30,
  height: 30,
},
navBarHeader: {
  flex: 1,
  color: Colors.snow,
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 24,
},
navBarButton: {
  color: Colors.snow,
  textAlign:'right',
},
})
