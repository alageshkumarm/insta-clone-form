// CODE HERE
const username = document.getElementById("username");
const password = document.getElementsByName("password")[0];
const logBtn = document.getElementsByClassName("blue-btn")[0];
const error = document.getElementById("loginError");

username.oninput = function(){
	if (username.value.length > 3 && password.value.length > 3){
		logBtn.disabled = false;
	}
	if (username.value.length < 3 || password.value.length < 3){
		logBtn.disabled = true;
	}
};

password.oninput = function(){
	if (username.value.length > 3 && password.value.length > 3){
		logBtn.disabled = false;
	}
	if (username.value.length < 3 || password.value.length < 3){
		logBtn.disabled = true;
	}
};

logBtn.onclick = function(){
	if (username.value === "insta" && password.value === "webdev"){
		error.innerHTML = "Success!"
	}
	else {
		error.innerHTML = "Sorry, your password was incorrect. Please double-check your password."
	}
}