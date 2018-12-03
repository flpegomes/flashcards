import { ADD_DECK, LIST_DECKS, ADD_CARD_TO_DECK, CURRENT_DECK } from '../actions'

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
        case CURRENT_DECK: 
            console.log('current deck')
            return {
                ...state,
                decks: {
                    ...state.decks
                },
                currentDeck: action.deck 
            }
        case ADD_CARD_TO_DECK: 
            console.log('add_card_to_deck')
            console.log(state)
            const countCard = state.currentDeck.cards
            const updateDeck = {
                ...state.currentDeck,
                questions: [
                    ...state.currentDeck.questions,
                    action.newCard
                ],
                cards: countCard + 1
            }
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [state.currentDeck.title]: updateDeck
                },
                currentDeck: updateDeck
            }
        default:
            return state
    }
}

export default decks