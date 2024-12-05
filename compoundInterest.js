const principalBox = document.querySelector("#principal");
const interestRateBox = document.querySelector("#interestRate");
const periodsBox = document.querySelector("#periods");
const yearsBox = document.querySelector("#years");
const interestOutput = document.querySelector("#accumulated");
const totalOutput = document.querySelector("#total");

principalBox.addEventListener("input", updateInterest);
interestRateBox.addEventListener("input", updateInterest);
periodsBox.addEventListener("input", updateInterest);
yearsBox.addEventListener("input", updateInterest);

function updateInterest() {
  const principal = Number(principalBox.value);
  const interestRate = Number(interestRateBox.value) / 100;
  const periods = Number(periodsBox.value);
  const years = Number(yearsBox.value);
  const inside_formula = Math.pow(1 + interestRate / periods, periods * years);
  const compoundInterest = principal * inside_formula - principal;
  const totalAmount = principal * inside_formula;
  interestOutput.textContent = compoundInterest.toFixed(2);
  totalOutput.textContent = totalAmount.toFixed(2);
}
