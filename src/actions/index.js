export const ADD_DECK = 'ADD_DECK'
export const LIST_DECKS = 'LIST_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const CURRENT_DECK = 'CURRENT_DECK'
export const RESET_CURRENT_DECK = 'RESET_CURRENT_DECK'
export const INCREMENT_DECK = 'INCREMENT_DECK'
export const WRONG_ANSWER = 'WRONG_ANSWER'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const RESET_CURRENT_QUIZ = 'RESET_CURRENT_QUIZ'


import { AsyncStorage } from 'react-native'
import _ from 'lodash'
const STORAGE_KEY = '@FlashCards:StorageKey'

export function getDeck(id) {
    return dispatch => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((results) => {
                let deck = JSON.parse(results)
                deck = _.pick(deck, ['title', id])
                deck = _.valuesIn(deck)[0]
                dispatch({type: CURRENT_DECK, deck })
            })
    }
}

export function correctAnswer() {
    return dispatch => {
        dispatch({type: CORRECT_ANSWER})
    }
}

export function wrongAnswer() {
    return dispatch => {
        dispatch({type: WRONG_ANSWER})
    }
}

export function resetCurrentQuiz() {
    return dispatch => {
        dispatch({type: RESET_CURRENT_QUIZ})
    }
}

export function removeDeck(id) {
    return dispatch => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((results) => {
                let deck = JSON.parse(results)
                deck[id] = undefined
                delete deck[id]
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(deck))
                
            })
            .then(() => dispatch({type: RESET_CURRENT_DECK, id}))
            .then(() => dispatch(listAllDecks()))            
    }
}

export function addNewQuestion(card, id) {
    const newCard = {
        question: card.question,
        answer: card.answer
    }
    
    return dispatch => { 
        AsyncStorage.getItem(STORAGE_KEY)
            .then(decks => {
                if(decks !== null) {
                    decks = JSON.parse(decks)
                    decks[id].questions = [
                        ...decks[id].questions,
                        newCard
                    ]
                    decks[id].cards = decks[id].cards + 1
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks), () => 
                        dispatch({type: ADD_CARD_TO_DECK, newCard}))
                }

            })
    }
}

export function incrementPlaysDeck(id) {
    return dispatch => { 
        AsyncStorage.getItem(STORAGE_KEY)
            .then(decks => {
                if(decks !== null) {
                    decks = JSON.parse(decks)
                    const plays = decks[id].plays + 1
                    decks[id].plays = plays
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks), (deck) => 
                        dispatch({type: INCREMENT_DECK, plays}))
                }

            })
    }
}

export function listAllDecks() {
    return dispatch => {
        AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results);
            dispatch({type: LIST_DECKS, decks})
        })
    }
}

export function addDeck(deck, key) {
    deck.timestamp = Date.now()
    return dispatch => {
        AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
            [key]: deck
        }))
        .then(() => dispatch({type: ADD_DECK, deck}))
    } 
}
