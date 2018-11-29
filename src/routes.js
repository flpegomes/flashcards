import { createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import MenuDeck from './views/MenuDeck'
import NovoDeck from './views/NovoDeck'
import AddCard from './views/AddCard'
import BackDeck from './components/BackDeck'

const Routes = createStackNavigator({
    Home : {
        screen: Home,
    },
    MenuDeck : {
        screen: MenuDeck,
    },
    NovoDeck: {
        screen: NovoDeck
    },
    AddCard: {
        screen: AddCard
    },
    BackDeck: {
        screen: BackDeck
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