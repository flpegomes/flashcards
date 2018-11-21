import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Feather} from 'react-native-vector-icons/Feather';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

function Deck ({ data }) {
    //4BA32C
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.containerTitle}>
                            <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#fff' />
                            <View>
                                <Text style={styles.textTitle}>Um dois tres</Text>
                                <Text style={{ fontSize: 10, color:'#aaa', paddingLeft: 2 }}> Baralho </Text>
                            </View>  
                    </View>
                    <Text style={styles.textCount}>12 de fevereiro de 2018</Text>
                </View>
                <View style={styles.content}> 
                    <View style={styles.boxCardNumber}>
                        <Text style={styles.titleContent}> Cartas: </Text>
                        <View style={{flexDirection:'row', paddingTop: 12}}>
                            <Foundation name='page-multiple' style={{ elevation: 10 }} size={20} color='#fff' />
                            <Text style={[styles.textContent, { color:'#aaa', paddingLeft: 5, }]}> 10 </Text>
                        </View>
                    </View>
                    <View style={styles.boxCount}>
                        <Text style={styles.titleContent}> Partidas: </Text>
                        <View style={{flexDirection:'row', paddingTop: 12}}>
                            <MaterialIcons name='replay' style={{ elevation: 10 }} size={20} color='#fff' />
                            <Text style={[styles.textContent, { color:'#aaa', paddingLeft: 5, }]}> 5 </Text>
                        </View>
                    </View>
                    <View style={styles.boxMaxScore}>
                        <Text style={styles.titleContent}> Pontuação máxima:  </Text>
                        <View style={{flexDirection:'row', paddingTop: 12}}>
                            <Feather name='target' style={{ elevation: 10 }} size={20} color='#fff' />
                            <Text style={[styles.textContent, { color:'#5dd460', paddingLeft: 5, }]}> 7</Text>
                            <Text style={[styles.textContent, { color:'#aaa' }]}>/10 </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentButtons}>
                    <TouchableOpacity
                        onPress={()=>{}}
                        style={[styles.button, { backgroundColor: '#3CA2DF'} ]}
                    >
                        <Text style={styles.buttonText}>INICIAR QUIZ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{}}
                        style={[styles.button, { backgroundColor: '#34D27C'} ]}
                    >
                        <Text style={styles.buttonText}>ADICIONAR CARTAS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{}}
                        style={[styles.button, { backgroundColor: '#f3cb0b'} ]}
                    >
                        <Text style={styles.buttonText}>REINICIAR ESTATÍSTICAS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}

export default Deck;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282a36',
        flex:1,
        marginHorizontal: 12,
        marginVertical: 16,
        borderRadius: 4,
        elevation: 0,
    },
    header: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop: 16,
        paddingRight: 8, 
        paddingBottom: 8,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 16,
        marginRight: 16,
        flex:1
    },  
    content: { 
        flex:3,
        flexDirection:'row',
        backgroundColor: '#282a36',
    },
    boxMaxScore: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8
    },
    boxCardNumber: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxCount: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentButtons: {
        flex: 9,
        backgroundColor: '#282a36',
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection:'column',
        marginBottom: 8
    },
    button: {
        height: 40,
        borderRadius: 2,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems:'center',
        width: 300
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14
    },  
    textTitle: {
        color: '#fff',
        fontSize: 12,
        paddingLeft: 5,
        fontWeight:'700'
    },
    textCount: {
        color: '#aaa',
        fontSize: 12,
        paddingRight: 10
    },
    titleContent: {
        fontSize: 12, 
        color:'#aaa', 
        paddingLeft: 2,
    },
    textContent: {
        fontSize: 12, 
        fontWeight:'700'
        //f22e2e red
        //5dd460 green
    }
})