function signUp() {
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let confirmPassword = document.getElementById("confirmPassword").value;
	if (password == confirmPassword) {
		console.log(`Welcome ${username}, email: ${email}, password: ${password}`);
		document.getElementById("output").style.color = "#0fe300";
		document.getElementById("output").innerHTML = `Success!`;
		// document.getElementById("output2").innerHTML = ``;
	} else {
		document.getElementById("output").style.color = "red";
		document.getElementById(
			"output"
		).innerHTML = `Password has to be matched!!`;

		console.log("Password has to be matched!");
	}
}
