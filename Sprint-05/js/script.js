function calcAmount() {
    let bgPrice = 1200;
    //Read the input fields
    let nameInput = document.querySelector("input[name='name-input']");
    let emailInput = document.querySelector("input[name='email-input']");
    let addressInput = document.querySelector("input[name='address-input']");
    let commentInput = document.querySelector("input[name='comment-input']");   
    let extraInput = document.querySelector("input[name='extra']:checked");
    let sauceInput = document.querySelector("select[name='sauce-input']");
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");

    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let extraPrice = parseInt(extraInput.value);
    extraPrice = isNaN(extraPrice) ? 0 : extraPrice;
    let saucePrice = parseInt(sauceInput.value);
    saucePrice = isNaN(saucePrice) ? 0 : saucePrice;

    if (amountNumber > 10) {
        alert("Maximum 10 hamburgert rendelhetsz egyszerre!");
    }
    else if (amountNumber < 1){
        alert("Legalább 1 hamburgert rendelned kell!");
    }
    else {
        //input to number and calculate the amount
        let totalPrice = (extraPrice + saucePrice + bgPrice) * amountNumber;
        //change HTML with JS and show amount
        showAmount.innerHTML = totalPrice;
    }

}