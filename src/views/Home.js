import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Animated, ActivityIndicator } from 'react-native'
import FrontDeck from '../components/FrontDeck'
import { NavigationActions } from 'react-navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import _ from 'lodash'
import { sortList } from '../utils/helpers'
import { listAllDecks  } from '../actions/index'
import { connect } from 'react-redux'
import BackDeck from '../components/BackDeck'
import FlipCard from 'react-native-flip-card' 

class Home extends Component {

    static navigationOptions = {
        title: 'Baralhos',  
    }

    componentDidMount() {
        this.props.dispatch(listAllDecks())
    }


    goToAddDeck = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddDeck',
            action: NavigationActions.navigate({ routeName: 'AddDeck' })
        })

        this.props.navigation.dispatch(navigateAction);
    }   


    render() {            
        const { decks } = this.props 


        return (
            
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.goToAddDeck() } style={styles.buttonAdd}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                        <AntDesign name='pluscircle' color='#3a5d8a' size={17}/>
                        <Text style={{color: '#3a5d8a', marginLeft: 10}}>CRIAR BARALHO</Text>
                    </View>
                    
                </TouchableOpacity>
                {this.props.loaded ? (
                    decks.length >= 1 ? (
                    <FlatList
                        data={decks}
                        keyExtractor={(deck) => deck.title}
                        renderItem={(deck) => (
                            <FlipCard 
                                style={styles.card}
                                friction={50}
                                perspective={1000}
                                flipHorizontal={false}
                                flipVertical={true}
                                clickable={true}
                            >
                                <FrontDeck key={deck.item.title} deck={deck.item} />
                                <BackDeck key={deck.item.title} title={deck.item.title} navigation={this.props.navigation}/>

                            </FlipCard>

                                
                        )}
                    />
                    ) : (
                        <View style={styles.containerEmpty}>
                            <Image source={require('../images/undraw_studying_s3l7.png')} resizeMode='contain' style={{width: 300, height: 300}}/>
                            <Text style={{width: 300, color: '#999', textAlign: 'center'}}>OPS.... parece que você ainda não tem nenhum baralho de estudo.</Text>
                        </View>
                    )
                                
            ) : (
                <View style={{marginTop: 25}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>    
            )}
            </View>
        )
    }
}

function mapStateToProps(decks) {
    if(decks.decks)  {
        const data = sortList(_.values(decks.decks))  
        return {
            decks: data,
            loaded: decks.loaded
        }
    } else {
        return {
            decks,
            loaded: decks.loaded
        }
    }
    
}

export default connect(mapStateToProps)(Home);

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
    },
    containerEmpty: {
        alignItems: 'center',
        flex: 1
    },
    card: {
        borderWidth: 0,
        marginBottom: 8,
        marginTop: 8,
        marginHorizontal: 12
    }

})