var clock_num = document.getElementById('clock_num');

const getTime = () => {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	/*
	var text_hours = hours;
	var text_minutes = minutes;
	if(hours < 10) {
		text_hours = "0" + hours;
	}
	if(minutes < 10) {
		text_minutes = "0" + minutes;
	}
	clock_num.innerHTML = text_hours + ":" + text_minutes;
	*/
	clock_num.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

const init = () => {
	getTime();
	setInterval(getTime, 1000);
}

init();