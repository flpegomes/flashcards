import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Animated } from 'react-native'
import SmallDeck from '../components/SmallDeck'
import { NavigationActions } from 'react-navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import _ from 'lodash'
import { sortList } from '../utils/helpers'
import { listAllDecks  } from '../actions/index'
import { connect } from 'react-redux'
import ButtonsDeck from '../components/ButtonsDeck'

class Home extends Component {

    static navigationOptions = {
        title: 'Baralhos',  
    }

    state = {
        selected: false
    }

    componentDidMount() {
        this.props.dispatch(listAllDecks())
        this.animatedValue = new Animated.Value(0)
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'  ],

        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }

    goToMenuDeck = (data) => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'MenuDeck',
            action:  NavigationActions.navigate({ routeName: 'MenuDeck'}),
            params: data  
        });

        this.props.navigation.dispatch(navigateAction);
    }

    testeCard = () => {
        this.setState({
            selected: true
        })
    }

    goToNovoDeck = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'NovoDeck',
            action: NavigationActions.navigate({ routeName: 'NovoDeck' })
        })

        this.props.navigation.dispatch(navigateAction);
    }   

    flipCard() {
        if(this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                //duration: 800,
                friction: 8,
                tension: 10
            }).start()
        } 
        else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                //duration: 800,
                friction: 8,
                tension: 10
            }).start()
        }  
    }
    

    render() {            
        const { decks } = this.props       

        const frontAnimatedStyle = {
            transform: [
                { rotateX: this.frontInterpolate }
            ]
        }

        const backAnimatedStyle = {
            transform: [
                { rotateX: this.backInterpolate }
            ]
        }  
        
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.goToNovoDeck() } style={styles.buttonAdd}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                        <AntDesign name='pluscircle' color='#3a5d8a' size={17}/>
                        <Text style={{color: '#3a5d8a', marginLeft: 10}}>CRIAR BARALHO</Text>
                    </View>
                    
                </TouchableOpacity>
                {decks.length >= 1 ? 
                <FlatList
                    data={decks}
                    keyExtractor={(deck) => deck.title}
                    renderItem={(deck) => (
                        <Animated.View>
                            <SmallDeck1 key={deck.item.title} deck={deck.item}/>  
                        </Animated.View>
                        
                    )}
                />
                : 
                    <View style={styles.containerEmpty}>
                        <Image source={require('../images/undraw_studying_s3l7.png')} resizeMode='contain' style={{width: 300, height: 300}}/>
                        <Text style={{width: 300, color: '#999', textAlign: 'center'}}>OPS.... parece que você ainda não tem nenhum baralho de estudo.</Text>
                    </View>
                }
                                
            </View>
        )
    }
}

function mapStateToProps(decks) {
    if(decks.decks)  {
        const data = sortList(_.values(decks.decks))  
        return {
            decks: data
        }
    } 
    return {
        decks
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
    flipCard: {
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        
    },

})