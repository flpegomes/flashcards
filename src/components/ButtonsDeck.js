import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Entypo} from 'react-native-vector-icons/Entypo';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';

class SmallDeck extends Component {
    
    render() {
            return  (
                <View style={styles.container}>
                    <View style={styles.contentReset}>
                        <Text style={[styles.contentText, {color: '#725224' }]}>RESETAR ESTATÍSTICAS</Text>
                        <AntDesign name='reload1' size={25} color='#725224' />
                    </View>
                    <View style={styles.contentAdd}>
                        <Text style={[styles.contentText, {color: '#275b27' }]}>ADICIONAR CARTAS</Text>
                        <Entypo name='add-to-list' size={25} color='#275b27' />
                    </View>
                    <View style={styles.contentPlay}>
                        <Text style={[styles.contentText, {color: '#1b4366' }]}>INICIAR QUIZ</Text>
                        <Entypo name='controller-play' size={25} color='#1b4366' />
                    </View>
                    <View style={styles.contentBack}>
                        <AntDesign name='arrowright' size={20} />
                    </View>
                </View>
            )          
           
        
    }
}

export default SmallDeck;

const styles = StyleSheet.create({
    containerButtons: {
        backgroundColor: '#f7f9f9',
        height: 170,
        marginHorizontal: 12,
        marginTop: 16,
        borderRadius: 4,
        elevation: 2,
        marginBottom: 8,
        flexDirection: 'row',
    },
    contentReset: {
        flex:3,
        backgroundColor: '#f0ad4e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentAdd: {
        flex:3,
        backgroundColor: '#5cb85c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentPlay: {
        flex:3,
        backgroundColor: '#337ab7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBack: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 12,
        paddingHorizontal: 8
    }
})