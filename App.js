import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from "./src/screens/SearchScreen"
import Single from "./src/screens/Single"



const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Single: Single
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
)

export default createAppContainer(navigator)
