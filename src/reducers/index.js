import { ADD_DECK, LIST_DECKS, ADD_CARD_TO_DECK, CURRENT_DECK, RESET_CURRENT_DECK } from '../actions'
import _ from 'lodash'
export const INITIAL_STATE = { loaded : false }

function decks (state = INITIAL_STATE , action) {
    switch(action.type) {
        case ADD_DECK:
            console.log('adicionar deck')
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.deck.title] : action.deck
                }
            }
        case LIST_DECKS: 
            console.log('lista')
            return {
                ...state,
                decks: {
                    ...state.decks,
                    ...action.decks       
                },
                loaded: true         
            }
        case CURRENT_DECK: 
            console.log('current deck')
            return {
                ...state,
                decks: {
                    ...state.decks
                },
                currentDeck: action.deck,
                loaded: true
            }
        case ADD_CARD_TO_DECK: 
            console.log('add_card_to_deck')
            const countCard = state.currentDeck.cards
            const updateDeck = {
                ...state.currentDeck,
                questions: [
                    ...state.currentDeck.questions,
                    action.newCard
                ],
                cards: countCard + 1,
            }
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [state.currentDeck.title]: updateDeck
                },
                currentDeck: updateDeck
            }
        case RESET_CURRENT_DECK:             
            return {
                ...state, 
                currentDeck: [],
                decks: [],
                loaded: false
            }
        default:
            return state
    }
}

export default decks