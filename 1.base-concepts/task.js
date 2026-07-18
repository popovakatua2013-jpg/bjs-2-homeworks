"use strict";

// Задача 1: Квадратное уравнение
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  const root1 = (-b + Math.sqrt(d)) / (2 * a);
  const root2 = (-b - Math.sqrt(d)) / (2 * a);
  return [root1, root2];
}

// Задача 2: Ипотечный калькулятор
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12;
  const S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  const monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}