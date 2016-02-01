"use strict";

const month = require("./month.js");
const year = require("./year.js");

const envir = process.platform;

console.log(envir);

const [,, ...args] = process.argv

const today = new Date();
const month2 = today.getMonth() + 1;
const year2 = today.getFullYear();;


if (args.length === 2) {
  const [month1, year1] = args;

  if (month1 < 1 || month1 > 12) {

    throw "Month value must be between 1 and 12!";

  } else if (year1 < 1753 || year1 > 9999) {

    throw "Year must be between 1753 and 9999!";

  } else {

    console.log(month.printMonth(parseInt(month1), parseInt(year1),envir));

  }

} else if (args.length === 1) {
  const [year1] = args;

  if (year1 < 1753 || year1 > 9999) {

    throw "Year must be between 1753 and 9999!";

  } else {

    console.log(year.printYear(parseInt(year1),envir));

  }

} else {

  console.log(month.printMonth(parseInt(month2), parseInt(year2),envir));

}
