export function getStockData() {
    let value = Math.random() * 3
    let expectedValue = value.toFixed(2)
    /* You could also do: */
    // let value = (Math.random()*3).toFixed(2)
    return {
        name: 'QtechAI',
        symbol: 'QTA',
        price: expectedValue,
        // time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        time: new Date().toLocaleTimeString()
    }
}