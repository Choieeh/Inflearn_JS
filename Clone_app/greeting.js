const name_div = document.getElementById('name_div');
const name = document.getElementById('name');
const name_display = document.getElementById('name_display');

const USER_LS = "currentUser"

const handleSubmit = (event) => {
	event.preventDefault();
	const currentValue = name.value;
	localStorage.setItem(USER_LS, currentValue);
	paintGreeting(currentValue);
}

const getName = () => {
	name_div.classList.remove("disappear");
	name_div.addEventListener("submit", handleSubmit);
}

const paintGreeting = (currentUser) => {
	name_div.classList.add("disappear");
	name_display.classList.remove("disappear");
	name_display.innerText = `Hello ${currentUser}`;
}

const loadName = () => {
	const currentUser = localStorage.getItem(USER_LS)
	if(currentUser === null){
		getName();
	}
	else {
		paintGreeting(currentUser);
	}
}

const init_greeting = () => {
	loadName();
}

init_greeting();