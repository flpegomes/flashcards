export const ADD_DECK = 'ADD_DECK'
export const LIST_DECKS = 'LIST_DECKS'

import { AsyncStorage } from 'react-native'
import _ from 'lodash'
const STORAGE_KEY = '@FlashCards:StorageKey'

export function getDeck(id) {
    return dispatch => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((results) => {
                let data = JSON.parse(results)
                data = _.pick(data, ['title', id])
                console.log(data)
            })
    }
}

export function listAllDecks() {
    return dispatch => {
        AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            dispatch(listDecks(data))
        })
    }
}

export function addDeck(content, key) {
    content.timestamp = Date.now()
    return dispatch => {
        AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
            [key]: content
        }))
        .then(() => dispatch(addDeckR(content)))
    } 
}

function addDeckR (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function listDecks (decks) {

    return {
        type: LIST_DECKS,
        decks
    }
}