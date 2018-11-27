export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return d.toLocaleDateString('pt-BR') + '  -  '  + time.substr(0, 5) + time.slice(-2)
}

export const sortList = (data) => {
        return data.sort((a, b) => {
            return b.timestamp - a.timestamp
        })

}