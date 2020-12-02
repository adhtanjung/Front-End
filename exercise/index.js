function addArr(arr1, arr2) {
	// let output = 0;
	// arr2.map((val) => (output += val)); // INI MAP TAPI SEHARUSNYA GAPAKE MAP KARNA MAP RETURNNYA ARRAY
	// arr1.map((val) => (output += val));
	// return output;

	// for (let i = 0; i < arr1.length; i++) { //PAKE FOR LOOP
	// 	output += arr1[i];
	// }
	// for (let i = 0; i < arr2.length; i++) {
	// 	output += arr2[i];
	// }
	total = arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b); //PAKE REDUCE
	// arr2 = arr2.reduce((a, b) => a + b);
	return total;
}

// console.log(addArr([1, 2, 3], [4, 5, 6]));
// console.log(addArr([1, 10, 100], [2, 20, 200]));
// console.log(addArr([1, 10, 100, 1000, 10000], [2, 20, 200, 2000, 20000]));

function even(num) {
	let even = 0;
	let output = [];

	for (let i = 0; even < num; i++) {
		even += 2;
		output.push(even);
	}
	return output.join(", ");
}

// console.log(even(20));
// console.log(even(10));
// console.log(even(14));

const position = (arr1, arr2) => {
	// for (let i = 0; i < arr1.length; i++) {
	// 	arr1[i] += arr2[i];
	// }
	// return arr1;
	arr1 = arr1.map((num, i) => {
		return (num += arr2[i]);
	});
	return arr1;
};

// console.log(position([1, 2, 3], [4, 5, 6]));
// console.log(position([4, 5, 6], [7, 8, 9]));
// console.log(position([4, 5, 6, 7, 8], [7, 8, 9, 10, 11]));

changeEven = (str) => {
	let arr = str.split("");

	for (let i = 1; i < str.length; i += 2) {
		arr[i] = "z";
	}
	return arr.join("");
};

// console.log(changeEven("makan"));
// console.log(changeEven("bambang"));
// console.log(changeEven("susilo"));

multiply = (n) => {
	// let output = 0;
	// let num = n - 1;
	// // console.log(num);
	// for (let i = 1; i < n; i++) {
	// 	if (output == 0) {
	// 		output += n * num;
	// 		num--;
	// 		// console.log(output, n, num);
	// 	} else {
	// 		output = output * num;
	// 		num--;
	// 	}
	// }
	// return output;
	n;
};

console.log(multiply(5));
console.log(multiply(4));
console.log(multiply(8));
console.log(multiply(9));
console.log(multiply(3));
console.log(multiply(2));
// ! do not run this!
// ? has to be fixed
// * run this first
//
