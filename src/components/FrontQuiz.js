import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {default as Entypo} from 'react-native-vector-icons/Entypo';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Foundation} from 'react-native-vector-icons/Foundation';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { removeDeck } from '../actions/index'

class FrontQuiz extends Component {

    render() {
        console.log(this.props.title)
            return  (
                <View style={styles.container}>

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
        backgroundColor: '#6d1921',
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