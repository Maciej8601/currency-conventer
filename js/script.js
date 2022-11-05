console.log("Pozdrawiam wszystkich!")

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let valueElement = document.querySelector(".js-value");
let selectElement = document.querySelector(".js-select");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = valueElement.value;
    const exchangeRate = selectElement.value;
    const currencyName = selectElement.options[selectElement.selectedIndex].label;

    const result = value / exchangeRate;
    currencyElement.innerText = result.toFixed(2) + currencyName;
});
