import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation'
import { addDeck, listAllDecks } from '../actions/index'
import { connect } from 'react-redux'

class AddCard extends Component {

    static navigationOptions = {
        title: 'Adicionar carta'
    }

    state = {
        card: {
            question: '',
            answer: '',
        }
    }

    handleQuestion = (question) => {
        this.setState({
            card: {
                ...this.state.card,
                question
            }
        })
    }

    handleAnswer = (answer) => {
        this.setState({
            card: {
                ...this.state.card,
                answer
            }
        })
    }

    addCard = () => {
        
    }

    deleta = () => {
        AsyncStorage.clear('@FlashCards:StorageKey')
    }

    toHome = () => {
        const backAction = NavigationActions.back();
          this.props.navigation.dispatch(backAction);
    }


    render() {
        const { question, answer } = this.state.card
        return (
            <View style={{backgroundColor: '#f7f9f9', flex:1}}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={{flexDirection:  'row', alignItems: 'center'}}>
                            <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                            <Text style={styles.labelTitle}>Qual a pergunta?</Text>
                        </View>
                        
                        <TextInput 
                            style={styles.txtInputTitle}
                            placeholder='Digite uma pergunta objetiva para ficar mais fácil os estudos'
                            onChangeText={(question) => this.handleQuestion(question)}
                            value={question}
                        />

                        <View style={{flexDirection:  'row', alignItems: 'center'}}>
                            <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                            <Text style={styles.labelTitle}>Qual é a resposta correta?</Text>
                        </View>
                        
                        <TextInput 
                            style={styles.txtInputTitle}
                            placeholder='Digite uma resposta simpels para ficar mais fácil os estudos'
                            onChangeText={(answer) => this.handleAnswer(answer)}
                            value={answer}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity
                            onPress={()=> this.adicionarBaralho()}
                            style={[styles.button, { backgroundColor: '#34D27C'} ]}
                        >
                            <Text style={styles.buttonText}>ADICIONAR NOVA CARTA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity
                            onPress={()=> this.deleta()}
                            style={[styles.button, { backgroundColor: '#34D27C'} ]}
                        >
                            <Text style={styles.buttonText}>deleta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        )
    }
}

export default connect()(AddCard)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f9f9',
        flex:1,
        marginHorizontal: 12,
        marginVertical: 16,
        borderRadius: 2,
        elevation: 2,
        marginBottom: 8,
    },
    headerContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    contentContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInputTitle: {
        backgroundColor: '#fefefe',
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#aaa',
        paddingHorizontal: 10
    },
    labelTitle: {
        color: '#454545',
        fontSize: 20,    
    },
    button: {
        height: 40,
        borderRadius: 2,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14
    },  

})