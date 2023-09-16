let isDayError = false;
let isMonthError = false;
let isYearError = false;
//Input Elements
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

//Output Elememts
const dayOutput = document.getElementById("output-day");
const monthOutput = document.getElementById("output-month");
const yearOutput = document.getElementById("output-year");

//Button Elements
const resultBtn = document.getElementById("result-btn");

//Get Error Message
const errDay = document.querySelector(".err-messageDay");
const errMonth = document.querySelector(".err-messageMonth");
const errYear = document.querySelector(".err-messageYear");

// Get Date
const today = new Date();
const year = today.getFullYear(); // Yıl
const month = today.getMonth() + 1; // Ay (0-11 arası olduğu için +1 eklenir)
const day = today.getDate(); // Gün

//Age Calculate
function resultAge() {
  let dayValue = parseInt(dayInput.value);
  let monthValue = parseInt(monthInput.value);
  let yearValue = parseInt(yearInput.value);

  //Input Error Message
  dayInput.addEventListener("input", (e) => {
    if (dayInput.value > 31) {
      errDay.style.display = "block";
      isDayError = true;
    } else {
      errDay.style.display = "none";
      isDayError = false;
    }
  });
  monthInput.addEventListener("input", (e) => {
    if (monthInput.value > 12) {
      errMonth.style.display = "block";
      isMonthError = true;
    } else {
      errMonth.style.display = "none";
      isMonthError = false;
    }
  });
  yearInput.addEventListener("input", (e) => {
    if (yearInput.value > year) {
      errYear.style.display = "block";
      isYearError = true;
    } else {
      errYear.style.display = "none";
      isYearError = false;
    }
  });

  //Check Calculation
  let allInputsAreValid = !isDayError && !isMonthError && !isYearError;
  if (allInputsAreValid) {
    let resultDay = Math.abs(day - dayInput.value);
    let resultMonth = Math.abs(month - monthInput.value);
    let resultYear = Math.abs(year - yearInput.value);

    //Console Log
    console.log(resultYear + " " + resultMonth + " " + resultDay);

    //Add New Dates
    dayOutput.textContent = resultDay;
    monthOutput.textContent = resultMonth;
    yearOutput.textContent = resultYear;
  } else {
    alert("Please enter correct or valid values.");
    dayOutput.textContent = "--";
    monthOutput.textContent = "--";
    yearOutput.textContent = "--";
  }

  //Clear Input
  dayInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
}

//Event Listener
resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resultAge();
});
