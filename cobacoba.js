let output = "";

// for (let i = 1; i <= 5; i++) {
// 	for (let j = 0; j < i; j++) {
// 		if (i % 2 === 0) {
// 			output += "#";
// 		} else {
// 			output += "*";
// 		}
// 	}
// 	output += "\n";
// }

for (let i = 1; i <= 10; i++) {
	for (let j = 0; j < i; j++) {
		if (j % 3 === 0) {
			output += "*";
		} else if (output[output.length - 1] === "#") {
			output += "@";
		} else {
			output += "#";
		}
	}
	output += "\n";
}

console.log(output);
