import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import SmallDeck from '../components/SmallDeck'
import { NavigationActions } from 'react-navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { listAllDecks } from '../utils/api'
import _ from 'lodash'

class Home extends Component {

    static navigationOptions = {
        title: 'Baralhos',  
    }

    state = {
    }

    componentDidMount() {
        listAllDecks()
            .then((results) => {
                this.setState({
                    decks: results
                })
                console.log(this.state)
            })
    }
 
    goToMenuDeck = (data) => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'MenuDeck',
            action:  NavigationActions.navigate({ routeName: 'MenuDeck'}),
            params: {data}  
        });

        this.props.navigation.dispatch(navigateAction);
    }

    goToNovoDeck = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'NovoDeck',
            action: NavigationActions.navigate({ routeName: 'NovoDeck' })
        })

        this.props.navigation.dispatch(navigateAction);
    }   

    render() {
        const { decks } = this.state;

        const data = _.values(decks);

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.goToNovoDeck() } style={styles.buttonAdd}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                        <AntDesign name='pluscircle' color='#3a5d8a' size={17}/>
                        <Text style={{color: '#3a5d8a', marginLeft: 10}}>ADICIONAR BARALHO</Text>
                    </View>
                    
                </TouchableOpacity>
                {data ? 
                <FlatList
                    data={data}
                    keyExtractor={data.title}
                    renderItem={(deck) => (
                        <TouchableOpacity onPress={() => this.goToMenuDeck(data)}>
                             <SmallDeck deck={deck.item} />
                        </TouchableOpacity>
                    )}
                />


                : 
                    null
                }
                                
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex:1, 
      backgroundColor: '#f2f2f2',
    },
    buttonAdd: {
        height: 50,
        marginHorizontal: 12,
        marginTop: 16,
        borderRadius: 5,
        elevation: 0,
        borderColor: '#3a5d8a',
        borderStyle: 'dashed',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})