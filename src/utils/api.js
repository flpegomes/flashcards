import { AsyncStorage } from 'react-native'
import { listDecks } from '../actions';

const STORAGE_KEY = '@FlashCards:StorageKey'

export function addDeck( content, key) {
    content.timestamp = Date.now()
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [key]: content
    }))
}

export function removeDeck(key) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}


