// DOESN'T WORK PERFECTLY, BUT IT'S BETTER AND IT WAS 10 SECONDS COPYPASTE

export const toFixed2 = (number) => {
  if (countDecimals(number) >= 2) {
    return number.toFixed(2);
  } else return number;
};

const countDecimals = function (value) {
  let text = value.toString();
  // verify if number 0.000005 is represented as "5e-6"
  if (text.indexOf("e-") > -1) {
    // eslint-disable-next-line no-unused-vars
    let [base, trail] = text.split("e-");
    let deg = parseInt(trail, 10);
    return deg;
  }
  // count decimals for number in representation like "0.123456"
  if (Math.floor(value) !== value) {
    return value.toString().split(".")[1].length || 0;
  }
  return 0;
};
