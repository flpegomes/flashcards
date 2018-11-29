import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Entypo} from 'react-native-vector-icons/Entypo';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class BackDeck extends Component {

    render() {
        console.log(this.props.title)
            return  (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.contentReset} onPress={() => console.log('é isso')}>
                        <Text style={[styles.contentText, {color: '#725224' }]}>RESETAR ESTATÍSTICAS</Text>
                        <AntDesign name='reload1' size={25} color='#725224' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentAdd} onPress={() => this.props.navigation.navigate('AddCard')}>
                        <Text style={[styles.contentText, {color: '#275b27' }]}>ADICIONAR CARTAS</Text>
                        <Entypo name='add-to-list' size={25} color='#275b27' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentPlay} onPress={() => console.log('é isso')}>
                        <Text style={[styles.contentText, {color: '#1b4366' }]}>INICIAR QUIZ</Text>
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
    contentReset: {
        flex:3,
        backgroundColor: '#f0ad4e',
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