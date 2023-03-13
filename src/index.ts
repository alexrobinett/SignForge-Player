
import './CSS/style.css'


import { renderMessage, updateMessage } from './renderDOM'

async function fetchData(){
    try{
    let response = await fetch("https://signage-api-production.up.railway.app/player/playlist?id=640d61317e37b79561292f46")
    let data = await response.json();
    console.log(data)
    return data
    }catch (error){
    console.log(error)
    }

}

let playlist = await fetchData()

setInterval(async() => {
    playlist = await fetchData()
} ,8000 * playlist.length)

 


async function setupMessage(data: { imageOne: StringConstructor; imageTwo: StringConstructor; imageThree: StringConstructor; price: StringConstructor; quantity: StringConstructor; points: StringConstructor; promo: StringConstructor; promoLineOne: StringConstructor; promoLineTwo: StringConstructor; disclaimerLineOne: StringConstructor; disclaimerLineTwo: StringConstructor; }){


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
    
        

}

renderMessage(playlist[0])

let index: number  = 1
        setInterval(() => {
           updateMessage(playlist[index])
           index = (index + 1) % playlist.length
          }, 8000);

console.log(playlist)


export{setupMessage}

