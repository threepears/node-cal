"use strict";

const zeller = require('./zellers.js');
const month = require('./month.js');
const _ = require('lodash');

const replaceHeader = function (month) {
   const frontSpaces = Math.floor((20 - month.length) / 2);
   const backSpaces = 20 - (month.length + frontSpaces);

   const finalSpaces = " ".repeat(frontSpaces) + month + " ".repeat(backSpaces);

   return finalSpaces;
}

const replacePartHeader = function (month) {
   const frontSpaces = Math.floor((20 - month.length) / 2);
   const backSpaces = 20 - (month.length + frontSpaces);

   const finalSpaces = " ".repeat(frontSpaces) + month;

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

    January[0] = replaceHeader("January");
    February[0] = replaceHeader("February");
    March[0] = replacePartHeader("March");
    April[0] = replaceHeader("April");
    May[0] = replaceHeader("May");
    June[0] = replacePartHeader("June");
    July[0] = replaceHeader("July");
    August[0] = replaceHeader("August");
    September[0] = replacePartHeader("September");
    October[0] = replaceHeader("October");
    November[0] = replaceHeader("November");
    December[0] = replacePartHeader("December");


    let trial = " ".repeat(29) + year + "\n\n";

    //console.log(trial);
   // console.log(March[0]);


    for (let i =0; i < 8; i++) {
      if (January[i].length < 20) {
        const spaces = 20 - January[i].length;
        January[i] += " ".repeat(spaces);
      }
      if (February[i].length < 20) {
        const spaces = 20 - February[i].length;
        February[i] += " ".repeat(spaces);
      }
      if (!(March[i].length < 20 && March[i] === March[0])) {
        const spaces = 20 - March[i].length;
        March[i] += " ".repeat(spaces);
      }
      if (March[i] === March[6]) {
        March[6] = March[6].trim();
      }
      if (March[i] === March[7]) {
        March[7] = March[7].trim();
      }

      if (i === 7) {
        trial += January[i] + "  " + February[i] + "  " + March[i];
      } else {
        trial += January[i] + "  " + February[i] + "  " + March[i] + "\n";
      }
    }


    trial += "\n";

    for (let i =0; i < 8; i++) {
      if (April[i].length < 20) {
        const spaces = 20 - April[i].length;
        April[i] += " ".repeat(spaces);
      }
      if (May[i].length < 20) {
        const spaces = 20 - May[i].length;
        May[i] += " ".repeat(spaces);
      }
      if (!(June[i].length < 20 && June[i] === June[0])) {
        const spaces = 20 - June[i].length;
        June[i] += " ".repeat(spaces);
      }
      if (June[i] === June[6]) {
        June[6] = June[6].trim();
      }
      if (June[i] === June[7]) {
        June[7] = June[7].trim();
      }


      if (i === 7) {
        trial += April[i] + "  " + May[i] + "  " + June[i];
      } else {
        trial += April[i] + "  " + May[i] + "  " + June[i] + "\n";
      }
    }

    trial += "\n";

    for (let i =0; i < 8; i++) {
      if (July[i].length < 20) {
        const spaces = 20 - July[i].length;
        July[i] += " ".repeat(spaces);
      }
      if (August[i].length < 20) {
        const spaces = 20 - August[i].length;
        August[i] += " ".repeat(spaces);
      }
      if (!(September[i].length < 20 && September[i] === September[0])) {
        const spaces = 20 - September[i].length;
        September[i] += " ".repeat(spaces);
      }
      if (September[i] === September[6]) {
        September[6] = September[6].trim();
      }
      if (September[i] === September[7]) {
        September[7] = September[7].trim();
      }


      if (i === 7) {
        trial += July[i] + "  " + August[i] + "  " + September[i];
      } else {
        trial += July[i] + "  " + August[i] + "  " + September[i] + "\n";
      }
    }

    trial += "\n";

    for (let i =0; i < 8; i++) {
      if (October[i].length < 20) {
        const spaces = 20 - October[i].length;
        October[i] += " ".repeat(spaces);
      }
      if (November[i].length < 20) {
        const spaces = 20 - November[i].length;
        November[i] += " ".repeat(spaces);
      }
      if (!(December[i].length < 20 && December[i] === December[0])) {
        const spaces = 20 - December[i].length;
        December[i] += " ".repeat(spaces);
      }
      if (December[i] === December[6]) {
        December[6] = December[6].trim();
      }
      if (December[i] === December[7]) {
        December[7] = December[7].trim();
      }


      if (i === 7) {
        trial += October[i] + "  " + November[i] + "  " + December[i];
      } else {
        trial += October[i] + "  " + November[i] + "  " + December[i] + "\n";
      }
    }


    return trial;

  }

}
