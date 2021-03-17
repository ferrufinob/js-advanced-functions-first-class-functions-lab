const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function 1.
// function that returns a function
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, func) {
  return func(driversArray);
}
