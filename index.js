setInterval(() => {
  console.log("Salom ustoz");
}, 1000);

function calculate(a, b, hisoblash) {
  if (hisoblash === "+") {
    return a + b;
  } else if (hisoblash === "-") {
    return a - b;
  } else if (hisoblash === "*") {
    return a * b;
  } else if (hisoblash === "/") {
    return a / b;
  } else if (hisoblash === "%") {
    return a % b;
  }
}
console.log(calculate(10, 8, "-"));
console.log(calculate(7, 3, "+"));
console.log(calculate(2, 1, "*"));
console.log(calculate(21, 3, "/"));
console.log(calculate(3, 2, "%"));
