setInterval(() => {
  console.log("Assalomu aleykum ustoz");
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

function kotasi(arr) {
  let kotasi = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > kotasi.length) {
      kotasi = arr[i];
    }
  }
  return kotasi;
}
const mevalar = ["anor", "olma", "banan", "ananas"];
const res = kotasi(mevalar);
console.log("ananas");
