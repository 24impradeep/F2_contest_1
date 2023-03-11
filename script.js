/** @format */

function performOperations() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Invalid input. Please enter valid numbers.";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("result").innerText =
          "Invalid input. Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      document.getElementById("result").innerText =
        "Invalid input. Please select a valid operator.";
      return;
  }

  document.getElementById("result").innerText = "Result: " + result;
}


