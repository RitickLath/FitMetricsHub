"use strict";

// FOR BMI CALCULATION

const name_2 = document.querySelector(".user2_name");
const age_2 = document.querySelector(".user2_age");
const weight_2 = document.querySelector(".user2_weight");
const male_2 = document.querySelector(".user_male");
const female_2 = document.querySelector(".user_female");
const height_2 = document.querySelector(".user2_height");

document.querySelector(".BMI_btn").addEventListener("click", function (event) {
  event.preventDefault();

  // Check if all required fields have values
  if (
    name_2.value !== "" &&
    age_2.value !== "" &&
    age_2.value > 3 &&
    age_2.value < 100 &&
    weight_2.value !== "" &&
    weight_2.value > 5 &&
    weight_2.value < 140 &&
    height_2.value !== "" &&
    height_2.value > 30 &&
    height_2.value < 220
  ) {
    const BMI = Math.trunc(
      (100 * 100 * weight_2.value) / (height_2.value * height_2.value)
    );

    let status;
    if (BMI < 19) {
      status = "Underweight";
    } else if (BMI < 25) {
      status = "Normal";
    } else if (BMI < 30) {
      status = "Overweight";
    } else {
      status = "Obesity";
    }

    document.querySelector(".welcome_2").textContent = "Your BMI is...";
    document.querySelector(
      ".answer_2"
    ).textContent = `Hey ${name_2.value}, your BMI suggests you're ${status}. Your BMI is ${BMI}.`;
    //event.preventDefault();
  } else {
    document.querySelector(".welcome_2").textContent = "";
    document.querySelector(".answer_2").textContent =
      "Please fill all the required details correctly and practically possible input.";
  }
});

// FOR CALORIE COUNT CALCULATOR

const name_1 = document.querySelector(".user_name");

const age_1 = document.querySelector(".user_age");

const height_1 = document.querySelector(".user_height");
const weight_1 = document.querySelector(".user_weight");

document
  .querySelector(".calorie_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let BMII;
    if (
      (name_1.value !== "" &&
        age_1.value !== "" &&
        height_1.value !== "" &&
        weight_1 !== "" &&
        (document.querySelector(".female").checked ||
          document.querySelector(".male").checked) &&
        document.querySelector(".sed").checked) ||
      document.querySelector(".light").checked ||
      document.querySelector(".moderate").checked ||
      document.querySelector(".high").checked
    ) {
      if (document.querySelector(".female").checked) {
        BMII =
          65.51 +
          9.563 * Number(weight_1.value) +
          1.85 * Number(height_1.value) -
          4.676 * Number(age_1.value);
        console.log(`aaaa ${BMII}`);
      } else {
        BMII =
          66.47 +
          13.75 * Number(weight_1.value) +
          5.003 * Number(height_1.value) -
          6.77 * Number(age_1.value);
        console.log(`sss ${BMII}`);
      }

      if (document.querySelector(".sed").checked) {
        console.log("sed");
        document.querySelector(
          ".welcome_1"
        ).textContent = `Hey ${name_1.value}...`;
        document.querySelector(
          ".answer_1"
        ).textContent = `Your maintainance calorie totai is ${Math.round(
          1.2 * Number(BMII)
        )}`;
      } else if (document.querySelector(".light").checked) {
        console.log("light");
        document.querySelector(
          ".welcome_1"
        ).textContent = `Hey ${name_1.value}...`;
        document.querySelector(
          ".answer_1"
        ).textContent = `Your maintainance calorie totai is ${Math.round(
          1.375 * Number(BMII)
        )}`;
      } else if (document.querySelector(".moderate").checked) {
        console.log("moderate");
        document.querySelector(
          ".welcome_1"
        ).textContent = `Hey ${name_1.value}...`;
        document.querySelector(
          ".answer_1"
        ).textContent = `Your maintainance calorie totai is ${Math.round(
          1.55 * Number(BMII)
        )}`;
      } else if (document.querySelector(".high").checked) {
        console.log("high");
        document.querySelector(
          ".welcome_1"
        ).textContent = `Hey ${name_1.value}...`;
        document.querySelector(
          ".answer_1"
        ).textContent = `Your maintainance calorie totai is ${Math.round(
          1.725 * Number(BMII)
        )}`;
      }
    } else {
      document.querySelector(".welcome_1").textContent = `Hey`;
      document.querySelector(
        ".answer_1"
      ).textContent = `Please fill all content of above!`;
    }
  });
