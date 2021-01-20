var body = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];

var 숫자배열 = [];

for (var i = 0; i<4; i++){
	var temp = 숫자후보.splice(Math.ceil(Math.random() * 숫자후보.length()), 1)[0];
	숫자배열.push(temp);
}


var result = document.createElement('h1');
document.body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);


form.addEventListener('submit', function callback(event) {
	event.preventDefault();
	var 답 = 입력창.value;
	console.log(답);
	if (답 === 숫자배열.join('')) {
		result.textContent = '홈런';
		input.value = '';
		input.focus();
		var 숫자후보 = [1,2,3,4,5,6,7,8,9];
		var 숫자배열 = [];
		for (var i = 0; i<4; i++){
			var temp = 숫자후보.splice(Math.ceil(Math.random() * 숫자후보.length()), 1)[0];
			숫자배열.push(temp);
		}
	} else {
		var 답배열 = 답.split('');
		var strike = 0;
		var ball = 0;
		for (var i =0; i < 3; i++){
			if(답배열[i] === 숫자배열[i]){
				strike++;
			}
		}
	}
})