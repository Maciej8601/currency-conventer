{
    {
        const init = console.log("Pozdrawiam wszystkich!")
        init;
    }

    {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const valueElement = document.querySelector(".js-value");
            const selectElement = document.querySelector(".js-select");
            const currencyElement = document.querySelector(".js-currency");

            const value = valueElement.value;
            const exchangeRate = selectElement.value;
            const currencyName = selectElement.options[selectElement.selectedIndex].label;

            const result = value / exchangeRate;
            currencyElement.innerText = result.toFixed(2) + currencyName;
        });
    }
}