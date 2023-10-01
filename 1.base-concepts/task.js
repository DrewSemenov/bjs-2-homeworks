"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    arr.push(
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    );
  }

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12;
  const body = amount - contribution;
  const payment =
    body *
    (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));

  return +(payment * countMonths).toFixed(2);
}
