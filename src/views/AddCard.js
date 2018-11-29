import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation'
import { addDeck, getDeck } from '../actions/index'
import { connect } from 'react-redux'

class AddCard extends Component {

    static navigationOptions = {
        title: 'Adicionar carta de estudos'
    }

    state = {
        card: {
            question: '',
            answer: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(getDeck(this.props.navigation.state.params))
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
        console.log(this.props.navigation.state.params)
    }

    deleta = () => {
       // AsyncStorage.clear('@FlashCards:StorageKey')
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
                    <View style={styles.contentContainer}>
                        <View style={{marginBottom: 36}}>
                            <View style={{flexDirection:  'row', alignItems: 'center'}}>
                                <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                                <Text style={styles.labelTitle}>Qual a pergunta?</Text>
                            </View>
                            
                            <TextInput 
                                style={styles.txtInputTitle}
                                placeholder='Pergunta'
                                onChangeText={(question) => this.handleQuestion(question)}
                                value={question}
                            />
                            <Text style={styles.hintInput}>Dica: lembre da parte mais importante da matéria. Faça perguntas objetivas e simples.</Text>
                        </View>
                        <View style={{marginBottom: 36}}>
                            <View style={{flexDirection:  'row', alignItems: 'center'}}>
                                <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                                <Text style={styles.labelTitle}>Qual é a resposta correta?</Text>
                            </View>
                            
                            <TextInput 
                                style={styles.txtInputTitle}
                                placeholder='Resposta'
                                onChangeText={(answer) => this.handleAnswer(answer)}
                                value={answer}
                            />
                            <Text style={styles.hintInput} >Dica: escreva uma resposta completa e objetiva para ficar mais fácil os estudos!</Text>
                        </View>

                        
                        <TouchableOpacity
                            onPress={()=> this.addCard()}
                            style={[styles.button, { backgroundColor: '#34D27C'} ]}
                        >
                            <Text style={styles.buttonText}>ADICIONAR NOVA CARTA</Text>
                        </TouchableOpacity>
                    </View>
                        <TouchableOpacity
                            onPress={()=> this.deleta()}
                            style={[styles.button, { backgroundColor: '#34D27C'} ]}
                        >
                            <Text style={styles.buttonText}>deleta</Text>
                        </TouchableOpacity>
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
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 36
    },
    txtInputTitle: {
        backgroundColor: '#fefefe',
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#aaa',
        paddingHorizontal: 10,
        height: 40
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
        marginTop: 24,
        justifyContent: 'center',
        alignItems:'center',
         
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14
    },  
    hintInput: {
        fontSize: 12,
        color: '#aaa',
        fontWeight: '500',
        marginTop: 4,
        textAlign: 'center'
    }

})