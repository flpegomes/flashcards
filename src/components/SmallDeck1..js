import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
import {default as Entypo} from 'react-native-vector-icons/Entypo';

import moment from 'moment'

class SmallDeck extends Component {
    
    componentDidMount() {
        this.animatedValue = new Animated.Value(0)
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'  ],

        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }

    flipCard() {
        if(this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                //duration: 800,
                friction: 8,
                tension: 10
            }).start()
        } 
        else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                //duration: 800,
                friction: 8,
                tension: 10
            }).start()
        }  
    }


    render() {
        
        const frontAnimatedStyle = {
            transform: [
                { rotateX: this.frontInterpolate }
            ]
        }

        const backAnimatedStyle = {
            transform: [
                { rotateX: this.backInterpolate }
            ]
        }  


        const { title, cards, plays, score, timestamp  } = this.props.deck 
          
           
            return  (
                <TouchableOpacity onPress={() => this.flipCard()} >
                    <View>
                        <Animated.View style={[styles.container, styles.flipCard]}>
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
                        </Animated.View>
                    
                        <Animated.View style={[styles.containerButtons, styles.flipCard]}>
                            <View style={styles.contentResetButtons}>
                                <Text style={[styles.contentTextButtons, {color: '#725224' }]}>RESETAR ESTATÍSTICAS</Text>
                                <AntDesign name='reload1' size={25} color='#725224' />
                            </View>
                            <View style={styles.contentAddButtons}>
                                <Text style={[styles.contentTextButtons, {color: '#275b27' }]}>ADICIONAR CARTAS</Text>
                                <Entypo name='add-to-list' size={25} color='#275b27' />
                            </View>
                            <View style={styles.contentPlayButtons}>
                                <Text style={[styles.contentTextButtons, {color: '#1b4366' }]}>INICIAR QUIZ</Text>
                                <Entypo name='controller-play' size={25} color='#1b4366' />
                            </View>
                            <View style={styles.contentBackButtons}>
                                <AntDesign name='arrowright' size={20} />
                            </View>
                        </Animated.View>
                    
                </View>
                </TouchableOpacity>
                
            )          
           
        
    }
}

export default SmallDeck;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f9f9',
        height: 170,
        marginHorizontal: 12,
        marginTop: 16,
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
    contentResetButtons: {
        flex:3,
        backgroundColor: '#f0ad4e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentAddButtons: {
        flex:3,
        backgroundColor: '#5cb85c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentPlayButtons: {
        flex:3,
        backgroundColor: '#337ab7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBackButtons: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTextButtons: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 12,
        paddingHorizontal: 8
    },
    flipCard: {
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        position:  'absolute', 
        top: 0
    }
})