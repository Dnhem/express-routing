// Helper function (converts query STRING data input to array of NUMBERS)
function convertNums(nums) {
  return nums.split(",").map(num => Number(num));
}

// Helper function (create hash map (object) to track occurances of all numbers in array)
function hashNumbers(nums) {
  let arrayOfNums = convertNums(nums);
  let numsHashMap = {};
  for (let num of arrayOfNums) {
    if (!numsHashMap[num]) numsHashMap[num] = 0;
    numsHashMap[num]++;
  }
  return numsHashMap;
}

// Calculate mean
function mean(arrayOfNums) {
  let nums = convertNums(arrayOfNums);

  return (
    nums.reduce((acc, num) => {
      return acc + num;
    }) / nums.length
  );
}

// Calculate median
function median(arrayOfNums) {
  let nums = convertNums(arrayOfNums);
  let sortedNums = nums.sort((a, d) => a - d);
  let middleIdx = Math.floor(sortedNums.length / 2);
  return sortedNums.length % 2 !== 0
    ? sortedNums[middleIdx]
    : (sortedNums[middleIdx - 1] + sortedNums[middleIdx]) / 2;
}

// Calculate mode
function mode(arrayOfNums) {
  let numberTracker = hashNumbers(arrayOfNums);
  let count = 0;
  let mostFrequent;

  for (let key in numberTracker) {
    if (numberTracker[key] > count) {
      mostFrequent = key;
      count = numberTracker[key];
    }
  }
  return +mostFrequent;
}

module.exports = {
  mean,
  median,
  mode,
};
