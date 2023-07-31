const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");

function computeTemp(event) {
  const currentValue = event.target.value;

  switch (event.target.name) {
    case "Celcius":
      fahrenheitEl.value = (currentValue * 9) / 5 + 32;
      kelvinEl.value = parseFloat(currentValue) + 273.15;
      break;

    case "Fahrenheit":
      celciusEl.value = ((currentValue - 32) * 5) / 9;
      kelvinEl.value = ((currentValue - 32) * 5) / 9 + 273.15;
      break;

    case "Kelvin":
      celciusEl.value = currentValue - 273.15;
      fahrenheitEl.value = ((currentValue - 273.15) * 9) / 5 + 32;
      break;

    default:
      break;
  }
}
function reset() {
  celciusEl.value = "";
  fahrenheitEl.value = "";
  kelvinEl.value = "";
}
convertButton.addEventListener("click", computeTemp);
resetButton.addEventListener("click", reset);
