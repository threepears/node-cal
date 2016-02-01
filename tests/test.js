#!/usr/bin/env node

"use strict";

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal 1 2016').toString();
      const output = execSync('./cal.js 1 2016').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a six week month', () => {
      const goal = execSync('cal 8 2015').toString();
      const output = execSync('./cal.js 8 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a five week month', () => {
      const goal = execSync('cal 10 2015').toString();
      const output = execSync('./cal.js 10 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a four week month', () => {
      const goal = execSync('cal 2 2015').toString();
      const output = execSync('./cal.js 2 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 30 day month', () => {
      const goal = execSync('cal 11 2015').toString();
      const output = execSync('./cal.js 11 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 31 day month', () => {
      const goal = execSync('cal 12 2015').toString();
      const output = execSync('./cal.js 12 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a leap year', () => {
      const goal = execSync('cal 2 2012').toString();
      const output = execSync('./cal.js 2 2012').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a non leap year', () => {
      const goal = execSync('cal 2 2014').toString();
      const output = execSync('./cal.js 2 2014').toString();

      expect(output).to.equal(goal);
    });

    it('should handle just a year', () => {
      const goal = execSync('cal 2014').toString();
      const output = execSync('./cal.js 2014').toString();

      expect(output).to.equal(goal);
    });


  });

  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      // 2 === 14
      // 3 === 3
    });

    describe('.modifiedYear', () => {
      it('returns 2014 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      // 2016, 2 === 2015
      // 2017, 3 === 2017
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
});
