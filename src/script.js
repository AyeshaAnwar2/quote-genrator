// variabes
console.log("script loaded");

 let quote = document.querySelector("p");
 let button = document.getElementById("quote-button")
// logic

let quotation = ["Success is not final, failure is not fatal: it is the courage to continue that counts.",


"Do not wait for the perfect moment, take the moment and make it perfect.",


"In the middle of every difficulty lies opportunity.",


"The best way to predict your future is to create it.",


"Your time is limited, so don’t waste it living someone else’s life.",


"Don’t watch the clock; do what it does. Keep going.",


"Believe you can and you're halfway there.",

"Dream big. Start small. Act now.",

"It always seems impossible until it’s done.",

"Happiness is not something ready made. It comes from your own actions.",
 "The greatest glory in living lies not in never falling,  but in rising every time we fall. - Nelson Mandela",]
const genrateQuote = () => {
    let randomindex = Math.floor(Math.random() * quotation.length)
    quote.innerHTML = quotation[randomindex]
}

// event listner
button.addEventListener("click", genrateQuote)