console.log("Script Working..");

let result = document.getElementById('result');
let noValue = document.getElementById('noValue');
let noUnit = document.getElementById('noUnit');
let button = document.getElementById('convert');

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}

button.onclick = function () {
  noValue.innerHTML = '';
  noUnit.innerHTML = '';
  result.innerHTML = '';

  let val = document.getElementById('Value').value;
  let unit = document.getElementById('unit').value;

  if (val === '') {
    noValue.innerHTML = "Must provide a value";
    return;
  }

  val = Number(val);
  let ans;

  if (unit === "C") {
    ans = toFahrenheit(val).toFixed(2) + " °F";
  } else if (unit === "F") {
    ans = toCelsius(val).toFixed(2) + " °C";
  } else {
    noUnit.innerHTML = "Must select a unit of your value";
    return;
  }

  result.innerHTML = ans;
}