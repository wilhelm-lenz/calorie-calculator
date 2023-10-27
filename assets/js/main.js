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
  if (height !== 0 && age !== 0 && weight !== 0) {
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
    return Number(resultBaseMetabolicRate).toFixed(2);
  }
};

submitBtnElement.addEventListener("click", () => {
  event.preventDefault();
  baseKcalElement.style.color = "#ffffff";
  baseKjElement.style.color = "#ffffff";
  totalKcalElement.style.color = "#ffffff";
  totalKjElement.style.color = "#ffffff";
  console.log(calcBasalMetabolicRate(femaleElement.id));
  let pal = palFactorSelectElement.value;
  if (
    Number(calcBasalMetabolicRate(femaleElement.id)) !== 0 &&
    Number(calcBasalMetabolicRate(male.id))
  ) {
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
  } else {
    baseKcalElement.textContent = 0;
    baseKjElement.textContent = 0;
    totalKcalElement.textContent = 0;
    totalKjElement.textContent = 0;
    baseKcalElement.style.color = "#e03131";
    baseKjElement.style.color = "#e03131";
    totalKcalElement.style.color = "#e03131";
    totalKjElement.style.color = "#e03131";
  }
});
