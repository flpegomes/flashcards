import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Feather} from 'react-native-vector-icons/Feather';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

class MenuDeck extends Component {
    static navigationOptions = {
        title: 'Baralho selecionado'
    }

    render() {
    console.log(this.props.navigation.state.params.data.item)
        return (
            <View style={{backgroundColor: '#f7f9f9', flex:1}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.containerTitle}>
                                <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                                <View>
                                    <Text style={styles.textTitle}>Um dois tres {this.props.navigation.state.params.data.item}</Text>
                                    <Text style={{ fontSize: 10, color:'#454545', paddingLeft: 2 }}> Baralho </Text>
                                </View>  
                        </View>
                        <Text style={styles.textCount}>12 de fevereiro de 2018</Text>
                    </View>
                    <View style={styles.content}> 
                        <View style={styles.contentCardNumber}>
                            <Text style={[styles.titleContent, { color: '#D3281F' }]}> CARTAS </Text>
                            <View style={{flexDirection:'row', paddingTop: 12}}>
                                <Foundation name='page-multiple' style={{ elevation: 10 }} size={20} color='#D3281F' />
                                <Text style={[styles.textContent, { color:'#D3281F', paddingLeft: 5, }]}> 10 </Text>
                            </View>
                        </View>
                        <View style={styles.contentMaxScore}>
                            <Text style={[styles.titleContent, { color: '#0052C6' }]}>PONTUAÇÃO MAXIMA</Text>
                            <View style={{flexDirection:'row', paddingTop: 12}}>
                                <Feather name='target' style={{ elevation: 10 }} size={20} color='#0052C6' />
                                <Text style={[styles.textContent, { color:'#5dd460', paddingLeft: 5, }]}> 7</Text>
                                <Text style={[styles.textContent, { color:'#0052C6' }]}>/10 </Text>
                            </View>
                        </View>
                        <View style={styles.contentCount}>
                            <Text style={[styles.titleContent, { color: '#FFA62B'}]}> JOGADAS </Text>
                            <View style={{flexDirection:'row', paddingTop: 12}}>
                                <MaterialIcons name='replay' style={{ elevation: 10 }} size={20} color='#FFA62B' />
                                <Text style={[styles.textContent, { color:'#FFA62B', paddingLeft: 5, }]}> 5 </Text>
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
            </View>
            
        )
    }
}

export default MenuDeck

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
    },
    contentMaxScore: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8
    },
    contentCardNumber: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentCount: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentButtons: {
        flex: 9,
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
        color: '#454545',
        fontWeight: '900',
        fontSize: 14
    },  
    textTitle: {
        color: '#454545',
        fontSize: 16,
        paddingLeft: 5,
        fontWeight:'500'
    },
    textCount: {
        color: '#454545',
        fontSize: 12,
        paddingRight: 10
    },
    titleContent: {
        fontSize: 12, 
        color:'#454545', 
        paddingLeft: 2,
        fontWeight: '700',

    },
    textContent: {
        fontSize: 12, 
        fontWeight:'700'
        //f22e2e red
        //5dd460 green
    }
})