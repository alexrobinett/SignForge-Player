
import './CSS/style.css'

import imageOne from './images/drinks/blue-drink.png'
import imageTwo from './images/drinks/green-drink.png'
import imageThree from './images/drinks/red-drink.png'
import { renderMessage } from './renderDOM'


// const messageData =  getData()


// async function getData(){
//     const response = await fetch("https://backendurl.com/apiPlaceholder")
//     const data = await response.json();

//     return data
// }

// takes in API data and builds message. Currently hard coded for demo.

function setupMessage(messageData){
    const message = {}
    
    message.imageOne = imageOne
    message.imageTwo = imageTwo
    message.imageThree = imageThree
    message.price = "5"
    message.quantity = "2"
    message.points = "450"
    message.promo = "BUY ANY 2"
    message.promoLineOne = "POWERADE"
    message.promoLineTwo = "All Flavours, 710mL"
    message.disclaimerLineOne = "Ask for details, visit petro-points.com or facebook"
    message.disclaimerLineTwo = "Offer valid until October 24, 2022. At participating locations. Plus applicable taxes."

    return message
}


renderMessage(setupMessage())

export{setupMessage}
