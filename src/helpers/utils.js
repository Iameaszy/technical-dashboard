import moment from "moment";

export const getQueryString = str => str.split("?")[1];
export function getCommonElements(arrays) {
  //Assumes that we are dealing with an array of arrays of integers
  var currentValues = {};
  var commonValues = {};
  for (let i = arrays[0].length - 1; i >= 0; i--) {
    //Iterating backwards for efficiency
    currentValues[arrays[0][i]] = 1; //Doesn't really matter what we set it to
  }
  for (let i = arrays.length - 1; i > 0; i--) {
    var currentArray = arrays[i];
    for (var j = currentArray.length - 1; j >= 0; j--) {
      if (currentArray[j] in currentValues) {
        commonValues[currentArray[j]] = 1; //Once again, the `1` doesn't matter
      }
    }
    currentValues = commonValues;
    commonValues = {};
  }
  return Object.keys(currentValues).map(function(value) {
    return parseInt(value, 10);
  });
}
export var enumerateDaysBetweenDates = (startDate, stopDate, countOnly) => {
  var dateArray = [];
  var currentDate = moment(startDate);
  stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(moment(currentDate).format("YYYY-MM-DD")));
    currentDate = moment(currentDate).add(1, "days");
  }
  if (countOnly === true) return dateArray.length;
  return dateArray;
};

export function checkForBlockedDates(start, end, blockedDates) {
  // generate all the dates between start and end
  let datesBetweenStartAndEnd = enumerateDaysBetweenDates(start, end);

  // on the first instance of a date being found when i run arr.some with the index thing on the dates between start and end, send result of finding a blocked date

  let blocked_counter = 0,
    dates_between_counter = 0,
    stop = false;

  while (stop === false) {
    // if it has not iterated through all the dates between the start and end provided

    if (dates_between_counter < datesBetweenStartAndEnd.length) {
      // if it the blocked dates given havent been iterated through per date between

      if (blocked_counter < blockedDates.length) {
        // per date in datebetweenarray check if it's the same with the blockedDates
        if (
          datesBetweenStartAndEnd[dates_between_counter].isSame(
            blockedDates[blocked_counter]
          )
        ) {
          // if it finds a match, stop the loop
          stop = true;
          return { foundMatch: true };
        }
        // pending the time it has not iterated through, add 1 to the counter.
        blocked_counter = blocked_counter + 1;
      } else {
        blocked_counter = 0;
        dates_between_counter = dates_between_counter + 1;
      }
    } else {
      stop = true;
      return { foundMatch: false };
    }
  }
}

export const extractMessage = res =>
  res && res.response
    ? res.response.message || res.response.data.message
    : "Connection Error";

export const validator = (val, type) => {
  switch (type) {
    case "email":
      return val &&
        val !== "" &&
        val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ? true
        : false; // returns a boolean

    case "password":
      return val && val !== "" && val.length >= 6;

    case "tel":
      return val && val !== "" && val.length > 5 && val.match(/^[+]?\d+$/)
        ? true
        : false; // returns a boolean

    default:
      return val && val !== "" && val.match(/\S+/) ? true : false;
  }
};
