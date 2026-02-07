import { getStockData } from './fakeStockAPI.js'

// getStockData()
/* This line is not really doing much, except maybe priming the system for future 
   getStockData() calls */

let previousPrice = null
/* This variable needs to be set to null because, at this point, 
   there has been no previous price to compare it to; there is only one price currently */

function renderStockTicker(stockData) {

    stockData = getStockData()

    let {name, symbol, price, time} = stockData

    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('Time')
    
    let currentPrice = parseFloat(stockData.price)
   
    stockDisplayName.innerHTML = `Name: ${name}`
    stockDisplaySymbol.innerHTML = `Symbol: ${symbol}`
    stockDisplayPrice.innerHTML = `Price: $${price}`
    stockDisplayTime.innerHTML = `Time: ${time}`

    if (previousPrice !== null) {
        console.log(`${previousPrice}, ${currentPrice}`)
        stockDisplayPriceIcon.innerHTML = currentPrice - previousPrice > 0 ? "▲"
            : currentPrice - previousPrice == 0 ? "▶"
            : "▼"

        stockDisplayPriceIcon.style.color = currentPrice - previousPrice > 0 ? "green"
            : currentPrice - previousPrice == 0 ? "grey"
            : "red"
    }
    previousPrice = currentPrice;

}

renderStockTicker()
//Why does this need to be written outside the function?
setInterval(renderStockTicker, 1500)