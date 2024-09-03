/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let burgerPrice = 700;

// if ((burgerPrice >= 500)) {
//   console.log(`Free Coke`);
// } else {
//   console.log(`Coke Price`, 30);
// }

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

/* let weight = 72;
let height = 1.7;

let BMI = weight / (height * height);
console.log(BMI);


if (BMI < 18.5) {
  console.log(`you are underweight`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(`you are normal`);
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log(`you are overweight`);
} else {
  console.log(`you are obese.`);
} */

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 92;

if (score >= 90 && score <= 100) {
   console.log('A');
} else if (score >= 80 && score < 90) {
   console.log('B');
} else if (score >= 70 && score < 80) {
   console.log('C');
} else if (score >= 60 && score < 70) {
   console.log('D');
} else if (score >= 0 && score < 60) {
   console.log('F');
} else {
   console.log('Invalid score');
}


