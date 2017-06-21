import { StackNavigator } from 'react-navigation'
import SafeAsIgnite from '../Containers/SafeAsIgnite'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SafeAsIgnite: { screen: SafeAsIgnite },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SafeAsIgnite',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
