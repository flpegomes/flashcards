import { createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import AddDeck from './views/AddDeck'
import AddCard from './views/AddCard'
import PlayQuiz from './views/PlayQuiz'

const Routes = createStackNavigator({
    Home : {
        screen: Home,
    },
    AddDeck: {
        screen: AddDeck
    },
    AddCard: {
        screen: AddCard
    },
    PlayQuiz: {
        screen: PlayQuiz
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