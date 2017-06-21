import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 0,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.checklist,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.marginHorizontal,
    padding: 10,
    width: 300,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

})
