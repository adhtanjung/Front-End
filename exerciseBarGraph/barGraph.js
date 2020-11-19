// function barPerc() {
// 	let a = document.querySelector(".bar1");
// 	let b = getComputedStyle(a);
// 	let c = b.height;
// 	// let a = document.getElementById("bar1").style.height;

// 	alert("20%");
// }
// function barPerc2() {
// 	let a = document.querySelector(".bar2");
// 	let b = getComputedStyle(a);
// 	let c = b.height;

// 	alert("100%");
// }
// function barPerc3() {
// 	let a = document.querySelector(".bar3");
// 	let b = getComputedStyle(a);
// 	let c = b.height;

// 	alert("30%");
// }
// function barPerc4() {
// 	let a = document.querySelector(".bar4");
// 	let b = getComputedStyle(a);
// 	let c = b.height;

// 	alert("60%");
// }
// function barPerc5() {
// 	let a = document.querySelector(".bar5");
// 	let b = getComputedStyle(a);
// 	let c = b.height;

// 	alert("30%");
// }
// let a = document.querySelector(".bar1");
// let b = getComputedStyle(a);
// let c = b.height;

// let d = document.querySelector(".bar2");
// let e = getComputedStyle(a);
// let f = b.height;

// let a = document.querySelector(".bar3");
// let b = getComputedStyle(a);
// let c = b.height;

// let a = document.querySelector(".bar4");
// let b = getComputedStyle(a);
// let c = b.height;

// let a = document.querySelector(".bar5");
// let b = getComputedStyle(a);
// let c = b.height;

let arrPerc = [20, 80, 30, 50, 60];
function showBar(arr) {
	let barList = arr.map((val, i) => {
		return `
        <div class="square" onclick="barPerc(${val})" style="height:${val}%; "></div>
        `;
	});
	// console.log(barList);
	return (document.getElementById("content-container").innerHTML = barList.join(
		""
	));
}

function sort() {
	let arrPerc2nd = arrPerc;

	let arrSorted = arrPerc2nd.sort((a, b) => a - b);
	showBar(arrSorted);
	console.log(arrSorted);
}
function revert() {
	let arrPerc3 = [20, 80, 30, 50, 60];
	showBar(arrPerc3);
	// showBar(arrPerc);
	// console.log(arrPerc);
}
showBar(arrPerc);

function barPerc(val) {
	alert(`${val}%`);
}
