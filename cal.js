#!/usr/bin/env node --harmony_destructuring

"use strict";

const month = require("./lib/month.js");

const [,, ...args] = process.argv;

if (args.length === 2) {
  const [month1, year1] = args;

  if (month1 < 1 || month1 > 12) {

    throw "Month value must be between 1 and 12!";

  } else if (year1 < 1753 || year1 > 9999) {

    throw "Year must be between 1753 and 9999!";

  } else {

    console.log(month.printMonth(parseInt(month1), parseInt(year1)));

  }
//} else if (args.length === 1) {
  //const [year] = args;

  //console.log(`generateYear(${year})`);
//} else {
  //console.log('Broken');
}

//var month1 = 1;
//var year1 = 2016;

//console.log(month.makeCalendar(month1, year1));
