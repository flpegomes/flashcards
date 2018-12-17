import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation'
import { addDeck, listAllDecks } from '../actions/index'
import { connect } from 'react-redux'

class AddDeck extends Component {

    static navigationOptions = {
        title: 'Adicionar baralho de estudos'
    }

    state = {
        content: {
            title: '',
            questions: [],
            cards: 0,
            plays: 0,
            timestamp: ''
        }
    }

    handleTitle = (title) => {
        this.setState({
            content: {
                ...this.state.content,
                title
            }
        })
    }

    adicionarBaralho = () => {
        const { content } = this.state

        if(content.title.length >= 2){
            this.props.dispatch(addDeck(content, content.title))
            this.toHome();
        }
    }

    deleta = () => {
        AsyncStorage.clear('@FlashCards:StorageKey')
    }

    toHome = () => {
        const backAction = NavigationActions.back();
          this.props.navigation.dispatch(backAction);
    }


    render() {
        const { title } = this.state.content
        return (
            <View style={{backgroundColor: '#f7f9f9', flex:1}}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={{flexDirection:  'row', alignItems: 'center', flex:1}}>
                            <AntDesign name='info' style={{ elevation: 10, marginRight: 10 }} size={20} color='#454545' />
                            <Text style={styles.labelTitle}>Qual o nome do seu baralho de estudos?</Text>

                        </View>                        
                        <TextInput 
                            style={styles.txtInputTitle}
                            placeholder='Dica: pode ser o assunto a ser estudado'
                            onChangeText={(title) => this.handleTitle(title)}
                            value={title}
                        />
                        <Text style={styles.hintInput} >O nome do baralho deve ter no mínimo 2 caracteres.</Text>

                    </View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity
                            onPress={()=> this.adicionarBaralho()}
                            style={[styles.button, { backgroundColor: '#275b27'} ]}
                        >
                            <Text style={styles.buttonText}>ADICIONAR NOVO BARALHO</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            
        )
    }
}

export default connect()(AddDeck)

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
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    contentContainer: {
        flex: 3,
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
        flex:1
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
    hintInput: {
        fontSize: 12,
        color: '#aaa',
        fontWeight: '500',
        marginTop: 4,
        textAlign: 'center'
    }

})