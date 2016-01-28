module.exports = {

  modifiedMonth: function(month) {
   var finalMonth = 0;

   if (month > 2) {
     finalMonth = month;
    } else if (month === 1) {
     finalMonth = 13;
    } else {
      finalMonth = 14;
    }

    return finalMonth;
  },


  modifiedYear: function(year, month) {
    var finalYear = 0;

    if (month < 3) {
      finalYear = year - 1;
    } else {
      finalYear = year;
    }

    return finalYear;
  },


  getDay: function(year, month, day) {

    var result = ((day + (Math.floor(26 * (month + 1) / 10)) + year + Math.floor(year / 4) + (6 * Math.floor(year / 100)) + Math.floor(year / 400)) % 7) -1;

    if (result === -1) {
      result = 6;
    }

    return result;

  }

}
