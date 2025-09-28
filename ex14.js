/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  let diff = cash - total;
  const change = {};

  const amountOfCash = {
    "Twenty dollars": 2000,
    "Ten dollars": 1000,
    "Five dollars": 500,
    "Two dollars": 200,
    "One dollar": 100,
    Quarter: 25,
    Dime: 10,
    Nickel: 5,
    Penny: 1,
  };

  // calculate amount of twenty dollar
  const countTwentyDollars = (different) => {
    if (different >= 2000) {
      if (!change["Twenty dollars"]) {
        change["Twenty dollars"] = 1;
      } else {
        change["Twenty dollars"]++;
      }
      countTwentyDollars(different - 2000);
    }
  };
  countTwentyDollars(diff);
  if (change["Twenty dollars"]) {
    diff -= amountOfCash["Twenty dollars"] * change["Twenty dollars"];
  }

  // calculate amount of ten dollar
  const countTenDollars = (different) => {
    if (different >= 1000) {
      if (!change["Ten dollars"]) {
        change["Ten dollars"] = 1;
      } else {
        change["Ten dollars"]++;
      }
      countTenDollars(different - 1000);
    }
  };
  countTenDollars(diff);
  if (change["Ten dollars"]) {
    diff -= amountOfCash["Ten dollars"] * change["Ten dollars"];
  }

  // calculate amount of five dollar
  const countFiveDollars = (different) => {
    if (different >= 500) {
      if (!change["Five dollars"]) {
        change["Five dollars"] = 1;
      } else {
        change["Five dollars"]++;
      }
      countFiveDollars(different - 500);
    }
  };
  countFiveDollars(diff);
  if (change["Five dollars"]) {
    diff -= amountOfCash["Five dollars"] * change["Five dollars"];
  }

  //calculate amount of two dollar
  const countTwoDollars = (different) => {
    if (different >= 200) {
      if (!change["Two dollars"]) {
        change["Two dollars"] = 1;
      } else {
        change["Two dollars"]++;
      }
      countTwoDollars(different - 200);
    }
  };
  countTwoDollars(diff);
  if (change["Two dollars"]) {
    diff -= amountOfCash["Two dollars"] * change["Two dollars"];
  }

  // calculate amount of one dollar
  const countOneDollar = (different) => {
    if (different >= 100) {
      if (!change["One dollar"]) {
        change["One dollar"] = 1;
      } else {
        change["One dollar"]++;
      }
      countOneDollar(different - 100);
    }
  };
  countOneDollar(diff);
  if (change["One dollar"]) {
    diff -= amountOfCash["One dollar"] * change["One dollar"];
  }

  // calculate amount of quarter
  const countQuarter = (different) => {
    if (different >= 25) {
      if (!change.Quarter) {
        change.Quarter = 1;
      } else {
        change.Quarter++;
      }
      countQuarter(different - 25);
    }
  };
  countQuarter(diff);
  if (change.Quarter) {
    diff -= amountOfCash.Quarter * change.Quarter;
  }

  // calculate amount of dime
  const countDime = (different) => {
    if (different >= 10) {
      if (!change.Dime) {
        change.Dime = 1;
      } else {
        change.Dime++;
      }
      countDime(different - 10);
    }
  };
  countDime(diff);
  if (change.Dime) {
    diff -= amountOfCash.Dime * change.Dime;
  }

  // calculate amount of nickel
  const countNickel = (different) => {
    if (different >= 5) {
      if (!change.Nickel) {
        change.Nickel = 1;
      } else {
        change.Nickel++;
      }
      countNickel(different - 5);
    }
  };
  countNickel(diff);
  if (change.Nickel) {
    diff -= amountOfCash.Nickel * change.Nickel;
  }

  // calculate amount of penny
  const countPenny = (different) => {
    if (different >= 1) {
      if (!change.Penny) {
        change.Penny = 1;
      } else {
        change.Penny++;
      }
      countPenny(different - 1);
    }
  };
  countPenny(diff);

  return change;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
