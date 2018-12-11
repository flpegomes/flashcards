import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Animated, ScrollView, ActivityIndicator } from 'react-native'
import _ from 'lodash'
import { sortList } from '../utils/helpers'
import { connect } from 'react-redux'
import BackQuiz from '../components/BackQuiz'
import FlipCard from 'react-native-flip-card' 
import FrontQuiz from '../components/FrontQuiz';
import Swiper from 'react-native-deck-swiper'
import { getDeck } from '../actions/index'

class PlayQuiz extends Component {

    static navigationOptions = {
        title: 'Quiz',  
    }
    componentDidMount() {
        this.props.dispatch(getDeck(this.props.navigation.state.params))
    }

    state= {
        teste: [{nome: 'a'}, {nome: 'b'} ],
        loaded: false
    }

    render() {           
        return (
            this.props.currentDeck ? (
            <View style={styles.container}>
                <Swiper
                    backgroundColor={'#f7f9f9'}
                    cards={this.props.currentDeck.questions}
                    showSecondCard={true}
                    stackSize={3}
                    infinite={true}
                    renderCard={((questions) => (
                        <ScrollView>
                            <FlipCard 
                                    style={styles.card}
                                    friction={8}
                                    perspective={1000}
                                    flipHorizontal={false}
                                    flipVertical={true}
                                    clickable={true}
                                >
                                    <FrontQuiz question={questions.question}/>
                                    <BackQuiz answer={questions.answer}/>
                            </FlipCard>
                        </ScrollView>
                    ))}
                >

                </Swiper>
            </View>
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        )
    }
}

function mapStateToProps(decks) {
    console.log(decks.loadedd)
    return {
        currentDeck: decks.currentDeck,
    }
    
}

export default connect(mapStateToProps)(PlayQuiz);

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: '#f2f2f2',
    },
    card: {
        borderWidth: 0,
        marginBottom: 8,
        marginTop: 8,
        marginHorizontal: 12,
        flex:1,
    }

})