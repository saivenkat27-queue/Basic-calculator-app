const display = document.getElementById("output");

function expadd(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "0"; // reset to 0
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Eli Mudra ga";
  }
}
