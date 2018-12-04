import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Entypo} from 'react-native-vector-icons/Entypo';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { removeDeck } from '../actions/index'

class BackDeck extends Component {
    goToAddCard = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddCard',
            action: NavigationActions.navigate({ routeName: 'AddCard' }),
            params: this.props.title
        })

        this.props.navigation.dispatch(navigateAction);
    }   

    goToPlayQuiz = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'PlayQuiz',
            action: NavigationActions.navigate({ routeName: 'PlayQuiz' }),
            params: this.props.title
        })

        this.props.navigation.dispatch(navigateAction)
    }

    deleteDeck = () => {
        this.props.dispatch(removeDeck(this.props.title))
    }

    render() {
        console.log(this.props.title)
            return  (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.contentDelete} onPress={() => this.deleteDeck()}>
                        <Text style={[styles.contentText, {color: '#6d1921' }]}>EXCLUIR BARALHO</Text>
                        <Entypo name='trash' size={25} color='#6d1921' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentAdd} onPress={() => this.goToAddCard()}>
                        <Text style={[styles.contentText, {color: '#275b27' }]}>ADICIONAR CARTAS</Text>
                        <Foundation name='page-multiple' style={{ elevation: 10 }} size={20} color='#275b27' />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentPlay} onPress={() => this.goToPlayQuiz()}>
                        <Text style={[styles.contentText, {color: '#1b4366' }]}>COMEÇAR QUIZ</Text>
                        <Entypo name='controller-play' size={25} color='#1b4366' />
                    </TouchableOpacity>
                    <View style={styles.contentBack}>
                        <AntDesign name='arrowright' size={20} />
                    </View>
                </View>
            )          
           
        
    }
}

function mapStateToProps({decks}) {
    return {
        decks
    }
    
}


export default connect(mapStateToProps)(BackDeck);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f9f9',
        height: 170,
        borderRadius: 4,
        elevation: 2,
        flexDirection: 'row',

    },
    contentDelete: {
        flex:3,
        backgroundColor: '#dc3545',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentAdd: {
        flex:3,
        backgroundColor: '#5cb85c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentPlay: {
        flex:3,
        backgroundColor: '#337ab7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBack: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',

    },
    contentText: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 12,
        paddingHorizontal: 8
    }
})