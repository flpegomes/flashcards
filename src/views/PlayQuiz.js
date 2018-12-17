import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Animated, ScrollView, ActivityIndicator } from 'react-native'
import _ from 'lodash'
import { sortList } from '../utils/helpers'
import { connect } from 'react-redux'
import BackQuiz from '../components/BackQuiz'
import FlipCard from 'react-native-flip-card' 
import FrontQuiz from '../components/FrontQuiz';
import Swiper from 'react-native-deck-swiper'
import { getDeck, incrementPlaysDeck, resetCurrentQuiz } from '../actions/index'
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';


class PlayQuiz extends Component {

    static navigationOptions = {
        title: 'Quiz',  
    }
    componentDidMount() {
        this.props.dispatch(getDeck(this.props.navigation.state.params))
        this.props.dispatch(resetCurrentQuiz())
    }

    state = {
        loaded: false,
        endDeck: false
    }

    endDeck = () => {
        this.setState({
            ...this.state,
            endDeck: true
        })

        this.props.dispatch(incrementPlaysDeck(this.props.navigation.state.params))
    }

    render() {          

        return (
            this.props.currentDeck ? (
                this.state.endDeck === false ? (
                <View style={styles.container}>
                    <Swiper
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        backgroundColor={'#f7f9f9'}
                        cards={this.props.currentDeck.questions}
                        showSecondCard={true}
                        onSwipedAll={() => this.endDeck()}
                        stackSize={3}
                        swipeBackCard={true}
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
                    {this.state.cardIndex !== 0 && (
                        <TouchableOpacity
                            onPress={()=> this.swiper.swipeBack()}
                            style={[styles.button, { backgroundColor: '#1a3d6a'} ]}
                        >
                            <Text style={styles.buttonText}>VOLTAR PARA CARTA ANTERIOR</Text>
                        </TouchableOpacity>
                    )}
                </View>
                ) : (
                    <View style={styles.endContainer}>
                        <Text style={styles.endTitle}>Que pena, as perguntas acabaram...</Text>
                        <Text style={styles.endSubtitle}>Veja suas estatísticas:</Text>
                        <View style={{marginTop: 24, flexDirection: 'row'}}>
                            <View style={styles.contentStats}>
                                <Text style={[styles.titleContent, { color: '#3a5d8a' }]}> ACERTOS </Text>
                                <View style={{flexDirection:'row', paddingTop: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <AntDesign name='checkcircle' style={{ elevation: 10 }} size={30} color='#5cb85c' />
                                    <Text style={[styles.textContent, { color:'#3a5d8a', paddingLeft: 5, }]}> {this.props.currentQuiz.correct} </Text>
                                </View>
                            </View>
                            <View style={styles.contentStats}>
                                <Text style={[styles.titleContent, { color: '#3a5d8a' }]}> ERROS </Text>
                                <View style={{flexDirection:'row', paddingTop: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <AntDesign name='closecircle' style={{ elevation: 10 }} size={30} color='#dc3545' />
                                    <Text style={[styles.textContent, { color:'#3a5d8a', paddingLeft: 5, }]}> {this.props.currentQuiz.wrong} </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
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
        currentQuiz: decks.currentQuiz
    }
    
}

export default connect(mapStateToProps)(PlayQuiz);

const styles = StyleSheet.create({
    textContent: {
        fontSize: 14, 
        fontWeight:'700'
        //f22e2e red
        //5dd460 green
    },
    titleContent: {
        fontSize: 14, 
        color:'#454545', 
        paddingLeft: 2,
        fontWeight: '700',
    },
    contentStats: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    endSubtitle: {
        fontSize: 16,
        padding: 12,
        color: '#3a5d8a',
        textAlign: 'center',
        marginTop: 16
    },
    endTitle: {
        fontSize: 20,
        padding: 12,
        color: '#3a5d8a',
        textAlign: 'center'
    },
    container: {
      flex:1, 
      backgroundColor: '#f2f2f2',
      justifyContent: 'flex-end'
    },
    card: {
        borderWidth: 0,
        marginBottom: 8,
        marginTop: 8,
        marginHorizontal: 12,
        flex:1,
    },
    button: {
        height: 40,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 24,
        justifyContent: 'center',
        alignItems:'center',
         
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14
    },  
    endContainer: {
        height: 400,
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

})