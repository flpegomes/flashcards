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
import FrontQuiz from '../components/FrontQuiz';

class PlayQuiz extends Component {

    static navigationOptions = {
        title: 'Quiz',  
    }

    render() {            
        return (
            

                    <Animated.View>
                        <FlipCard 
                                style={styles.card}
                                friction={50}
                                perspective={1000}
                                flipHorizontal={false}
                                flipVertical={true}
                                clickable={true}
                            >
                                <FrontQuiz />
                                <BackDeck />

                            </FlipCard>
                    </Animated.View>
                        
 
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

export default connect(mapStateToProps)(PlayQuiz);

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