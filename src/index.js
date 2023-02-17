
import './CSS/style.css'

import priceMask from './images/price-mask.svg'
import circleRing from  './images/circle.svg'
import imageMask from './images/final-mask-petro-points.png'

import imageOne from './images/drinks/blue-drink.png'
import imageTwo from './images/drinks/green-drink.png'
import imageThree from './images/drinks/red-drink.png'
import petroLogo from './images/petro_points_black.png'

const body = document.querySelector("body");

// On off Transition

const fadeOn = document.createElement("div");
fadeOn.classList.add("fade-on");
body.appendChild(fadeOn);

const fadeOff = document.createElement("div");
fadeOff.classList.add("fade-off");
body.appendChild(fadeOff);

// Promo Details

const promoContainer = document.createElement("section");
promoContainer.classList.add("promo-container");

const img = document.createElement("img");
img.src = priceMask;
img.alt = "";
img.classList.add("mask");
promoContainer.appendChild(img);

const priceInfo = document.createElement("div");
priceInfo.classList.add("price-info");
promoContainer.appendChild(priceInfo);

const price = document.createElement("div");
price.classList.add("price");
priceInfo.appendChild(price);

const productNumber = document.createElement("span");
productNumber.classList.add("product-number");
productNumber.textContent = "2";
price.appendChild(productNumber);

const slash = document.createElement("span");
slash.id = "slash";
slash.textContent = "/";
price.appendChild(slash);

const moneySign = document.createElement("span");
moneySign.id = "money-sign";
moneySign.textContent = "$";
price.appendChild(moneySign);

const moneyValue = document.createElement("span");
moneyValue.id = "money-value";
moneyValue.textContent = "5";
price.appendChild(moneyValue);

const dealCopy = document.createElement("span");
dealCopy.classList.add("deal-copy");
dealCopy.textContent = "Buy Any 2";
priceInfo.appendChild(dealCopy);

const lineOne = document.createElement("p");
lineOne.classList.add("line-one");
lineOne.textContent = "POWERADE";
priceInfo.appendChild(lineOne);

const lineTwo = document.createElement("p");
lineTwo.classList.add("line-two");
lineTwo.textContent = "All Flavours, 710mL";
priceInfo.appendChild(lineTwo);

body.appendChild(promoContainer);

// Petro Points Circle

const pointsCircle = document.createElement("section");
pointsCircle.classList.add("points-circle");

const pointsCircleContainer = document.createElement("div");
pointsCircleContainer.classList.add("points-circle-container");
pointsCircle.appendChild(pointsCircleContainer);

const containerCircle = document.createElement("div");
containerCircle.classList.add("container-circle");
pointsCircleContainer.appendChild(containerCircle);

const ppMask = document.createElement("img");
ppMask.src = imageMask ;
ppMask.alt = "";
ppMask.classList.add("pp-mask");
containerCircle.appendChild(ppMask);

const circleBackgroundRed = document.createElement("div");
circleBackgroundRed.classList.add("circle-background-red");
containerCircle.appendChild(circleBackgroundRed);

const circleBackgroundWhite = document.createElement("div");
circleBackgroundWhite.classList.add("circle-background-white");
containerCircle.appendChild(circleBackgroundWhite);

const circleBackgroundWhiteTop = document.createElement("div");
circleBackgroundWhiteTop.classList.add("circle-background-white-top");
containerCircle.appendChild(circleBackgroundWhiteTop);

const circleBorder = document.createElement("img");
circleBorder.src = circleRing;
circleBorder.alt = "";
circleBorder.classList.add("circle-border");
containerCircle.appendChild(circleBorder);

const textContainer = document.createElement("div");
textContainer.classList.add("text-container");
containerCircle.appendChild(textContainer);

const topText = document.createElement("span");
topText.classList.add("top-text");
topText.textContent = "Up to";
textContainer.appendChild(topText);

const points = document.createElement("span");
points.classList.add("points");
points.textContent = "450";
textContainer.appendChild(points);

const bottomText = document.createElement("span");
bottomText.classList.add("bottom-text");
bottomText.textContent = "Points";
textContainer.appendChild(bottomText);

const pointsLogo = document.createElement("img");
pointsLogo.src = petroLogo ;
pointsLogo.alt = "";
pointsLogo.classList.add("points-logo");
containerCircle.appendChild(pointsLogo);

body.appendChild(pointsCircle);

// Disclaimer

const disclaimerContainer = document.createElement("section");
disclaimerContainer.classList.add("disclaimer-container");

const disclaimer1 = document.createElement("span");
disclaimer1.classList.add("disclaimer");
disclaimer1.textContent = "Ask for details, visit petro-points.com or facebook";
disclaimerContainer.appendChild(disclaimer1);

const disclaimer2 = document.createElement("span");
disclaimer2.classList.add("disclaimer");
disclaimer2.textContent = "Offer valid until October 24, 2022. At participating locations. Plus applicable taxes.";
disclaimerContainer.appendChild(disclaimer2);

const tradeMark = document.createElement("span");
tradeMark.classList.add("trade-mark");
tradeMark.textContent = "™Trademark of Suncor Energy Inc. Used under licence.";
disclaimerContainer.appendChild(tradeMark);

body.appendChild(disclaimerContainer);

// product Images

const productImages = document.createElement("section");
productImages.classList.add("product-images");

const leftImage = document.createElement("img");
leftImage.src = imageOne;
leftImage.alt = "blue powerade";
leftImage.id = "left-image";
productImages.appendChild(leftImage);

const centerImage = document.createElement("img");
centerImage.src = imageTwo;
centerImage.alt = "green powerade";
centerImage.id = "center-image";
productImages.appendChild(centerImage);

const rightImage = document.createElement("img");
rightImage.src = imageThree;
rightImage.alt = "red Powerade";
rightImage.id = "right-image";
productImages.appendChild(rightImage);

body.appendChild(productImages);