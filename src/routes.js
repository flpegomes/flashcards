import { createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import MenuDeck from './views/MenuDeck'
import AddDeck from './views/AddDeck'
import AddCard from './views/AddCard'

const Routes = createStackNavigator({
    Home : {
        screen: Home,
    },
    MenuDeck : {
        screen: MenuDeck,
    },
    AddDeck: {
        screen: AddDeck
    },
    AddCard: {
        screen: AddCard
    },
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