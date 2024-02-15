const number = document.querySelector("#number");
const inputRange = document.querySelector("#range");
const percentageCurrentNumber = document.querySelector(".percentage-current-number");
const resultNumber = document.querySelector(".result-number");
const errorText = document.querySelector(".text-error");
let value = 50;
let result = 0;

number.addEventListener('input', function () {
    calculatePercentage(value);
});

inputRange.addEventListener('input', function () {
    value = this.value;
    percentageCurrentNumber.textContent = value + "%";
    calculatePercentage(value);
});

function calculatePercentage(value) {
    if (!isNaN(number.value) && parseFloat(number.value) >= 0) {
        result = parseFloat(number.value) * (value / 100);

        resultNumber.textContent = result;
        errorText.textContent = "";
    } else {
        errorText.textContent = "Insert a valid number";
    }
};