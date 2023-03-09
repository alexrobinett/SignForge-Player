
import './CSS/style.css'


import { renderMessage, updateMessage } from './renderDOM'

async function fetchData(){
    try{
    let response = await fetch("https://signage-api-production.up.railway.app/messages/640566ca7ca1015497759ee3")
    let data = await response.json();
    console.log(data)
    return data
    }catch (error){
    console.log(error)
    }

}

async function setupMessage(){

       let data = await fetchData()

       let message = {
        imageOne: String,
        imageTwo: String,
        imageThree: String,
        price: String,
        quantity: String,
        points: String,
        promo: String,
        promoLineOne: String,
        promoLineTwo: String,
        disclaimerLineOne: String,
        disclaimerLineTwo: String,
    }
    
        message.imageOne = data.imageOne
        message.imageTwo = data.imageTwo
        message.imageThree = data.imageThree
        message.price = data.price
        message.quantity = data.quantity
        message.points = data.points
        message.promo = data.promo
        message.promoLineOne = data.promoLineOne
        message.promoLineTwo = data.promoLineTwo
        message.disclaimerLineOne = data.disclaimerLineOne
        message.disclaimerLineTwo = data.disclaimerLineTwo
    
        return message

}


renderMessage(await setupMessage())
setInterval(async () => {
    updateMessage(await setupMessage())
}, 70000);


export{setupMessage}
