const arr = [1, 2, 3, 4];

function numberChecker(arr) {
  function checkNum(num) {
    let found = false;
    arr.forEach((element) => {
      if (element === num) found = true;
    });
    return found;
  }
  return checkNum;
}

console.log(numberChecker(arr)(5));
