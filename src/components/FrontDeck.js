import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment'

class FrontDeck extends Component {

    render() {
    
        const { title, cards, plays, score, timestamp  } = this.props.deck 
          return (
                    <View style={[styles.container]}>
                        <View style={styles.header}>
                            <View style={styles.containerTitle}>
                                    <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                                    <View>
                                        <Text style={styles.textTitle}>{title} </Text>
                                        <Text style={{ fontSize: 12, color:'#454545', paddingLeft: 2 }}> Baralho </Text>
                                    </View>  
                            </View>
                            
                            <Text style={styles.textCount}>{moment(timestamp).format('DD/MM/YYYY')}</Text>
                        </View>
                        <View style={styles.content}> 
                            <View style={styles.contentCardNumber}>
                                <Text style={[styles.titleContent, { color: '#D3281F' }]}> CARTAS </Text>
                                <View style={{flexDirection:'row', paddingTop: 12}}>
                                    <Foundation name='page-multiple' style={{ elevation: 10 }} size={20} color='#D3281F' />
                                    <Text style={[styles.textContent, { color:'#D3281F', paddingLeft: 5, }]}> {cards} </Text>
                                </View>
                            </View>
                            <View style={styles.contentMaxScore}>
                                <Text style={[styles.titleContent, { color: '#0052C6' }]}>PONTUAÇÃO MAXIMA</Text>
                                <View style={{flexDirection:'row', paddingTop: 12}}>
                                    <Text style={[styles.textContent, { color:'#0052C6', paddingLeft: 5, }]}>{score} </Text>
                                </View>
                            </View>
                            <View style={styles.contentCount}>
                                <Text style={[styles.titleContent, { color: '#FFA62B'}]}> JOGADAS </Text>
                                <View style={{flexDirection:'row', paddingTop: 12}}>
                                    <MaterialIcons name='replay' style={{ elevation: 10 }} size={20} color='#FFA62B' />
                                    <Text style={[styles.textContent, { color:'#FFA62B', paddingLeft: 5, }]}> {plays} </Text>
                                </View>
                            </View>
                        </View> 
                    </View>     
                
            )
            
           
        
    }
}

export default FrontDeck;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f9f9',
        height: 170,
        borderRadius: 2,
        elevation: 2,
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
        alignItems: 'center'
    },  
    content: {
        flex:3,
        flexDirection:'row'
    },
    contentMaxScore: {
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8
    },
    contentCardNumber: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentCount: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        color: '#454545',
        fontSize: 14,
        paddingLeft: 5,
        fontWeight:'500'
    },
    textCount: {
        color: '#454545',
        fontSize: 12,
        paddingRight: 10,
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
    },
})