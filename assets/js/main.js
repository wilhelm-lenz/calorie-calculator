"use strict";
const bodySizeElement = document.querySelector("#body-size");
const ageElement = document.querySelector("#age");
const weightElement = document.querySelector("#weight");
const femaleElement = document.querySelector("#female");
const maleElement = document.querySelector("#male");
const genderElement = document.querySelectorAll(".gender");
const palFactorSelectElement = document.querySelector("#pal-factor");
const submitBtnElement = document.querySelector(".btn-submit");
const baseKcalElement = document.querySelector(".base-kcal");
const baseKjElement = document.querySelector(".base-kJ");
const totalKcalElement = document.querySelector(".total-kcal");
const totalKjElement = document.querySelector(".total-kJ");
let baseMetabolicRate = 0;

const calcBasalMetabolicRate = (genderId) => {
  let height = Number(bodySizeElement.value);
  let age = Number(ageElement.value);
  let weight = Number(weightElement.value);
  let resultBaseMetabolicRate = 0;
  if (genderId === "female") {
    resultBaseMetabolicRate = (
      655.1 +
      9.6 * weight +
      1.8 * height -
      4.7 * age
    ).toFixed(2);
  } else if (genderId === "male") {
    resultBaseMetabolicRate = (
      66.47 +
      13.7 * weight +
      5 * height -
      6.8 * age
    ).toFixed(2);
  }
  return resultBaseMetabolicRate;
};

submitBtnElement.addEventListener("click", () => {
  event.preventDefault();
  let pal = palFactorSelectElement.value;
  if (femaleElement.checked) {
    baseMetabolicRate = calcBasalMetabolicRate(femaleElement.id);
    baseKcalElement.textContent = baseMetabolicRate;
    baseKjElement.textContent = (baseMetabolicRate * 4.184).toFixed(2);
    totalKcalElement.textContent = (pal * baseMetabolicRate).toFixed(2);
    totalKjElement.textContent = (pal * baseMetabolicRate * 4.184).toFixed(2);
  } else if (maleElement.checked) {
    baseMetabolicRate = calcBasalMetabolicRate(maleElement.id);
    baseKcalElement.textContent = baseMetabolicRate;
    baseKjElement.textContent = (baseMetabolicRate * 4.184).toFixed(2);
    totalKcalElement.textContent = (pal * baseMetabolicRate).toFixed(2);
    totalKjElement.textContent = (pal * baseMetabolicRate * 4.184).toFixed(2);
  }
});
