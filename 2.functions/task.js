"use strict";

function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = [...arr].reduce((a, b) => a + b, 0);
  const avg = +(sum / [...arr].length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return [...arr].length ? [...arr].reduce((a, b) => a + b, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
  return [...arr].length ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  if (![...arr].length) {
    return 0;
  }

  const sumEven = [...arr].reduce((a, b) => a + (b % 2 === 0 && b), 0);
  const sumOdd = [...arr].reduce((a, b) => a + (b % 2 !== 0 && b), 0);

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (![...arr].length) {
    return 0;
  }

  const arrEven = [...arr].filter((el) => el % 2 === 0);
  const sumEven = arrEven.reduce((a, b) => a + b, 0);

  return +(sumEven / arrEven.length).toFixed(2);
}

function makeWork(arrOfArr, func) {
  const resultArr = arrOfArr.map((el) => func(...el));

  return Math.max(...resultArr);
}
