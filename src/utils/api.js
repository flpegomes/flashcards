import { AsyncStorage } from 'react-native'

const STORAGE_KEY = '@FlashCards:StorageKey'

export function addDeck( content, key) {
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

export function listAllDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            return data;
        })
}