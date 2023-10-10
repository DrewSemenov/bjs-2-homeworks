"use strict";

function parseCount(string) {
  const result = Number.parseFloat(string);

  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

function validateCount(string) {
  try {
    return parseCount(string);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;

    this._perimeter = a + b + c;
  }

  get perimeter() {
    return this._perimeter;
  }

  get area() {
    const p = this._perimeter / 2;

    return Number(
      Math.sqrt(
        p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      error: "Ошибка! Треугольник не существует",

      get area() {
        return this.error;
      },
      get perimeter() {
        return this.error;
      },
    };
  }
}
