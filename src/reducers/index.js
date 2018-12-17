import { ADD_DECK, LIST_DECKS, ADD_CARD_TO_DECK, CURRENT_DECK, RESET_CURRENT_DECK, INCREMENT_DECK, CORRECT_ANSWER, WRONG_ANSWER, RESET_CURRENT_QUIZ } from '../actions'
import _ from 'lodash'
export const INITIAL_STATE = { loaded : false, currentQuiz: { correct: 0, wrong: 0
} }

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
        case INCREMENT_DECK: {
            const updateDeck = {
                ...state.currentDeck,
                plays: action.plays
            }
            return {
                ...state,
                decks: { 
                    ...state.decks,
                    [state.currentDeck.title]: updateDeck,
                },
                currentDeck: updateDeck
            }
            
        }
        case RESET_CURRENT_DECK:             
            return {
                ...state, 
                currentDeck: [],
                decks: [],
                loaded: false
            }
        case CORRECT_ANSWER: {
            const updateCurrentQuiz = state.currentQuiz.correct + 1
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    correct: updateCurrentQuiz,
                }
            }
        }
        case WRONG_ANSWER: {
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    wrong: state.currentQuiz.wrong + 1,
                }
            }
        }
        case RESET_CURRENT_QUIZ: {
            return {
                ...state,
                currentQuiz: {
                    correct: 0,
                    wrong: 0,
                }
            }
        }
        default:
            return state
    }
}

export default decks