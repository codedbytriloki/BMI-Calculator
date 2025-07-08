const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const calculateBtn = document.getElementById("calculateBtn");
const calBmi = document.getElementById("calBmi");
const range = document.getElementById("range");

calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if(isNaN(height) || isNaN(weight)){
    alert("Please enter valid number");
    return;
  }
  const heightInMeter = height / 100;
  const BMI = weight / (heightInMeter * heightInMeter);
  calBmi.innerHTML = BMI.toFixed(2);

  if(BMI < 18.5){
    range.innerHTML = "You are in Underweight";
  }
  else if( BMI < 25){
    range.innerHTML = "You are in Normal";
  }
  else if(BMI < 30){
    range.innerHTML = "You are in Overweight";
  }
  else {
    range.innerHTML = "You are in Obese";
  }

  setTimeout(() => {
    heightInput.value = "";
    weightInput.value = "";
    calBmi.innerHTML = "";
    range.innerHTML = "";
  },8000)
})