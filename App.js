
import AppStack from './src/index'
import GeneralNews from './src/content/Home/GeneralNews'
import { StackNavigator } from 'react-navigation'

const RouteConfigs = {
  AppStack: { screen: AppStack },
  GeneralNews: { screen: GeneralNews }
}

const StackNavigatorConfig = {
  headerMode: 'none',
}

export default InvisionApp = StackNavigator(RouteConfigs, StackNavigatorConfig)