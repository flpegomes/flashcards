import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'

class FrontQuiz extends Component {

    render() {
            return  (
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={{flex:3}}>
                            <View style={{flexDirection:  'row', alignItems: 'center'}}>
                                <AntDesign name='info' style={{ elevation: 10 }} size={20} color='#454545' />
                                <Text style={styles.labelTitle}>Pergunta:</Text>
                            </View>
                            <Text style={[styles.labelQuestion]}>{this.props.question}</Text>
                            <Text style={styles.hintInput}>Depois de responder mentalmente, clique na carta para ver a resposta correta.</Text>
                        </View>
                            
                        <View style={{flexDirection:'row', flex: 1}}>
                            <TouchableOpacity
                                onPress={()=> {}}
                                style={[styles.button, { backgroundColor: '#5cb85c'} ]}
                            >
                                <Text style={styles.buttonText}>ACERTEI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=> {}}
                                style={[styles.button, { backgroundColor: '#dc3545'} ]}
                            >
                                <Text style={styles.buttonText}>ERREI</Text>
                            </TouchableOpacity>
                        </View>
                           
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


export default connect(mapStateToProps)(FrontQuiz);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f9f9',
        height: 400,
        borderRadius: 4,
        elevation: 2,

    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 36
    },
    labelTitle: {
        color: '#454545',
        fontSize: 20,    
    },
    labelQuestion: {
        color: '#454545',
        fontSize: 24, 
        fontWeight: '900'   
    },
    hintInput: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 12,
        textAlign: 'left'

    },
    button: {
        height: 40,
        borderRadius: 50,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 24,
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        marginHorizontal: 4
         
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14
    },  

})