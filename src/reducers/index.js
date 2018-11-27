import { ADD_DECK, LIST_DECKS } from '../actions'

export const INITIAL_STATE = { }

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
                }         
            }
        default:
            return state
    }
}

export default decks