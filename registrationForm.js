function signUp() {
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let confirmPassword = document.getElementById("confirmPassword").value;
	if (password == confirmPassword) {
		console.log(`Welcome ${username}, email: ${email}, password: ${password}`);
	} else {
		console.log("Password has to be matched!");
	}
}
