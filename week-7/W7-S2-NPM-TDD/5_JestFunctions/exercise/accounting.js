// VAT Calculator.js

function calculateGross(amount, vatPercentage = 0.2) {
  console.log("calculateGross", vatPercentage);
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

  return Math.round((amount + amount * vatPercentage) * 100) / 100;
}

function calculateNet(amount, vatPercentage = 0.2) {
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

  // round to 2 decimal places
  return Math.round((amount / (1 + vatPercentage)) * 100) / 100;
}

function calculateVAT(amount, vatPercentage = 0.2) {
  if (typeof amount !== "number" || typeof vatPercentage !== "number") {
    throw new Error("Both amount and vatPercentage must be numbers");
  }

    return Math.round((amount * vatPercentage) * 100) / 100;
  
}

module.exports = { calculateGross, calculateNet, calculateVAT };
