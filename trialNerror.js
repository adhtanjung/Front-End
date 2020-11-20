l;

// Explanation about why all of (arr1) elements also replaced eventhough we've tried to assign into a new variable(arr2) // Data Manipulation Issue
let arr1 = [20, 30, 50, 20, 100, 40];
let arr2 = arr1.sort((a, b) => a - b);
console.log(arr2);
