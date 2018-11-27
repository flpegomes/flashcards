import { createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import Home1 from './views/Home'
import MenuDeck from './views/MenuDeck'
import NovoDeck from './views/NovoDeck'

const Routes = createStackNavigator({
    Home : {
        screen: Home,
    },
    MenuDeck : {
        screen: MenuDeck,
    },
    NovoDeck: {
        screen: NovoDeck
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#1a3d6a'
        },
        headerTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff'
    }
})

export default Routes;