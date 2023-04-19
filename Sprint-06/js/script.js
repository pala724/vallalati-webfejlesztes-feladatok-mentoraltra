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
        showAmount.innerHTML = totalPrice;
    }
}

function validateInput(){
    let nameInput = String(document.querySelector("input[name='name-input']"));
    let emailInput = document.querySelector("input[name='email-input']");
    let addressInput = document.querySelector("input[name='address-input']");
    let commentInput = document.querySelector("input[name='comment-input']"); 
}