"use strict";

const zeller = require('./zellers.js');
const _ = require('lodash');

module.exports = {

  printMonth : function (month, year, envir) {

    const day = 1;
    
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const abbrDays = "Su Mo Tu We Th Fr Sa";

    const modMonth = zeller.modifiedMonth(month);
    const modYear = zeller.modifiedYear(year, month);
    const newDay = zeller.getDay(modYear, modMonth, day);

    const whichDay = daysOfWeek[newDay];
    const whichMonth = monthsOfYear[month - 1];

    const d = new Date(year, month, 0);
    const daysInMonth = d.getDate();

    const calendarHead = whichMonth + " " + year;
    const spaces = Math.floor((20 - calendarHead.length) / 2);
    const backSpaces = " ".repeat(20 - (calendarHead.length + spaces));
    const frontSpaces = " ".repeat(spaces);

    var firstPrint = " ".repeat(newDay * 3);
    var counter = 20 - (newDay * 3);

    for (var i = 1; i <= daysInMonth; i++) {

      if (i <= 9) {
        firstPrint += " " + (i);
      } else {
        firstPrint += (i);
        if (i === daysInMonth) {
          break;
        }
      }

      counter = counter - 2;

      if (counter === 0 && envir === "linux") {
        firstPrint += "  \n";
        counter = 20;
      } else if (counter === 0) {
        firstPrint += "\n";
        counter = 20;
      } else {
        firstPrint += " ";
        counter--;
      }
    }

    const countBreaks = _.filter( firstPrint, x => x === "\n").length;
    let breaks = 0;

    switch (countBreaks) {
      case 3:
        breaks =  "\n\n";
        break;
      case 4:
        breaks = "\n";
        break;
      default:
        breaks = "";
    }


    if (envir === "linux") {
      var calendar = frontSpaces + calendarHead + backSpaces + "  \n" + abbrDays + "  \n" + firstPrint + breaks;
    } else {
      var calendar = frontSpaces + calendarHead + "\n" + abbrDays + "\n" + firstPrint + breaks;
    }


    return calendar;
    }
}
