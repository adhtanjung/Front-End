// function barPerc() {
// 	let a = document.querySelector(".bar1");
// 	let b = getComputedStyle(a);
// 	let c = b.height;
// 	let a = document.getElementById("bar1").style.height;
// }

let arrPerc = [40, 80, 20, 50, 60];
function showBar(arr) {
	let barList = arr.map((val, i) => {
		return `
        <div class="square" onclick="barPerc(${val})" style="height:${val}%; "></div>
        `;
	});

	return (document.getElementById("content-container").innerHTML = barList.join(
		""
	));
}

function sort() {
	let arrPerc2nd = [];
	for (let i = 0; i < arrPerc.length; i++) {
		arrPerc2nd.push(arrPerc[i]);
	}
	let arrSorted = arrPerc2nd.sort((a, b) => a - b);
	showBar(arrSorted);
}
function revert() {
	// let arrPerc3 = [20, 80, 30, 50, 60];
	// showBar(arrPerc3);
	showBar(arrPerc);
}
showBar(arrPerc);

function barPerc(val) {
	alert(`${val}%`);
}
