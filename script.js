// Get DOM elements
const tempInput = document.getElementById("temp");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

// Add event listener to convert button
convertBtn.addEventListener("click", () => {
  // Get input values
  const temp = Number(tempInput.value);
  const unit = unitSelect.value;

  // Convert temperature
  let result;
  if (unit === "celsius") {
    result = (temp * 9/5) + 32;
    result = result.toFixed(2) + " °F";
  } else {
    result = (temp - 32) * 5/9;
    result = result.toFixed(2) + " °C";
  }

  // Display result
  outputDiv.textContent = `${temp} °${unit} is ${result}`;
  outputDiv.classList.add("show");
});
