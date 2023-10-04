"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((el, i) => el === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (!users.length) {
    return 0;
  }

  const result = users
    .filter((a) => a.gender === gender)
    .reduce((p, c, i, arr) => {
      if (i === arr.length - 1) {
        return (p + c.age) / arr.length;
      }
      return p + c.age;
    }, 0);

  return result;
}
