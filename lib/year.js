"use strict";

const zeller = require('./zellers.js');
const month = require('./month.js');
const _ = require('lodash');

const replaceHeader = function (month) {
   let frontSpaces = Math.floor((20 - month.length) / 2);
   let backSpaces = 20 - (month.length + frontSpaces);

   let finalSpaces = " ".repeat(frontSpaces) + month + " ".repeat(backSpaces);

   return finalSpaces;
}


module.exports = {

  printYear : function (year) {

    let calendarMonth = [];

    for (let i = 0; i < 12; i++) {
      calendarMonth[i] = month.printMonth(i + 1, year);
    }

    let chunks = _.chunk(calendarMonth, 1);

    let January = _.split(chunks[0], "\n");
    let February = _.split(chunks[1], "\n");
    let March = _.split(chunks[2], "\n");
    let April = _.split(chunks[3], "\n");
    let May = _.split(chunks[4], "\n");
    let June = _.split(chunks[5], "\n");
    let July = _.split(chunks[6], "\n");
    let August = _.split(chunks[7], "\n");
    let September = _.split(chunks[8], "\n");
    let October = _.split(chunks[9], "\n");
    let November = _.split(chunks[10], "\n");
    let December = _.split(chunks[11], "\n");

    let newFirst = replaceHeader("January");

    let reallyNew = _.replace(January, January[0], newFirst);

    console.log(reallyNew);

    let trial = "";

    for (let i =0; i < 7; i++) {
      trial += January[i] + "  " + February[i] + "  " + March[i] + "\n";
    }

    //let monthRows = _.reduce(chunks, function(result, value, key) {
      //result[value] = key;
    //}, {});

    console.log(trial);

    //return calendarMonth;

  }

}
