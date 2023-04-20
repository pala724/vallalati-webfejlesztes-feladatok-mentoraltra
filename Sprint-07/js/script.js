function calcAmount() {
    let bgPrice = 1200;
    let extraInput = document.querySelector("input[name='extra']:checked");
    let sauceInput = document.querySelector("select[name='sauce-input']");
    let amountInput = document.querySelector("input[name='amount-input']");
    
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let extraPrice = parseInt(extraInput.value);
    extraPrice = isNaN(extraPrice) ? 0 : extraPrice;
    let saucePrice = parseInt(sauceInput.value);
    saucePrice = isNaN(saucePrice) ? 0 : saucePrice;

    showPrice(bgPrice, saucePrice, extraPrice, amountNumber);
}

function showPrice(bgPrice, saucePrice, extraPrice, amountNumber){
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 hamburgert rendelhetsz egyszerre!");
    }
    else if (amountNumber < 1){
        alert("Legalább 1 hamburgert rendelned kell!");
    }
    else {
        let totalPrice = (extraPrice + saucePrice + bgPrice) * amountNumber;
        if (totalPrice < 5000) {
            totalPrice += 500;
        }
        showAmount.innerHTML = totalPrice;
    }
}

function validateInput() {
    let nameInputValue = document.querySelector("#name").value.trim();
    let emailInputValue = document.querySelector("#email").value.trim();
    let addressInputValue = document.querySelector("#address").value.trim();
    let commentInputValue = document.querySelector("#comment").value.trim();

    if (nameInputValue === "") {
        alert("A név kitöltése kötelező!")
    }
    else if (nameInputValue.indexOf(".") >= 0) {
        alert("Helyesen add meg a neved!");
    }
    if (emailInputValue === "") {
        alert("Az email kitöltése kötelező!")
    }
    else if (emailInputValue.indexOf("." && "@") < 0) {
        alert("Helyesen add meg az email címed!");
    }
    if (addressInputValue === "") {
        alert("A cím kitöltése kötelező!")
    }
    else if (addressInputValue.length < 10) {
        alert("Helyesen add meg a címed!");
    }
    else if (commentInputValue.indexOf("<" || ">") >= 0) {
        alert("A comment mezőbe csak betűk és számok írhatók!");
    }
    else {
        calcAmount();
    }
}

let weatherArray = [-1, 5, 13, 15, 21, 26, 30];
function weather() {

    let showWeather = document.querySelector("#showWeather");
    let showOfferClear = document.querySelector("#showOffer");
    let currentDay = document.querySelector("#days").value;
    let weather = weatherArray[currentDay];
    if (currentDay == -1) {
        showWeather.innerHTML = "Először válassz egy napot!";
        showOfferClear.innerHTML = "";
    }
    else {
        let currentWeather = "Hőmérséklet a választott napon: " + String(weather) + " ℃.";
        showWeather.innerHTML = currentWeather;
        showOffer(weather);
    }
}   

function showOffer(weather) {
    let showOffer = document.querySelector("#showOffer");
    
    if (weather <= 0) {
        showOffer.innerHTML = "Ma forró csokit is árusítunk!"
    }
    else if (weather <= 15) {
        showOffer.innerHTML = "Melegedj át egy teával nálunk!"
    }
    else if (weather <= 20) {
        showOffer.innerHTML = "Ma finom sütivel várunk!"
    }
    else if (weather <= 25) {
        showOffer.innerHTML = "Ma fagyit is kínálunk!"
    }
    else {
        showOffer.innerHTML = "Hűsítsd le magad egy jéghideg limonádéval!!"
    }
}

function weatherStatMax(){
    let showMax = document.querySelector("#max");
    let max = weatherArray[0];
    for (let i = 0; i < weatherArray.length; i++) {
        if (weatherArray[i] > max)
        max = weatherArray[i];
    }
    showMax.innerHTML = "A heti legmagasabb hőmérséklet: " + String(max) + " ℃.";
}
function weatherStatMin(){
    let showMin = document.querySelector("#min");
    let min = weatherArray[0];
    for (let i = 0; i < weatherArray.length; i++) {
        if (weatherArray[i] < min)
        min = weatherArray[i];
    }
    showMin.innerHTML = "A heti legalacsonyabb hőmérséklet: " + String(min) + " ℃.";
}
function weatherStatAvg(){
    let showAvg = document.querySelector("#avg");
    let sum = 0;
    let avg;
    for (let i = 0; i < weatherArray.length; i++) {
        sum += weatherArray[i];
    }
    avg = sum / (weatherArray.length + 1);
    showAvg.innerHTML = "A heti átlag hőmérséklet: " + String(avg) + " ℃.";
}