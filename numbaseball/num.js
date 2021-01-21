var body = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];

var 숫자배열 = [];

for (var i = 0; i<4; i+=1){
	var temp = 숫자후보.splice(Math.floor(Math.random() * (9-i)), 1)[0];
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
console.log(숫자배열)


form.addEventListener('submit', function callback(event) {
	console.log(숫자배열)
//왜 숫자배열이 이 함수안에서는 적용이 안되지???????
	event.preventDefault();
	var 답 = input.value;
	console.log(답)
	console.log(숫자배열.join(''))
	if (답 === 숫자배열.join(``)) {
		result.textContent = '홈런';
		input.value = '';
		input.focus();
		var 숫자후보 = [1,2,3,4,5,6,7,8,9];
		var 숫자배열 = [];
		for (var i = 0; i<4; i++){
			var temp = 숫자후보.splice(Math.floor(Math.random() * (9-i)), 1)[0];;
			숫자배열.push(temp);
		}
	} else {
		var 답배열 = 답.split('');
		var strike = 0;
		var ball = 0;
		for (var i =0; i < 3; i++){
			if(답배열[i] === 숫자배열[i]){
				strike++;
			} else if (숫자배열.indexOf(답배열[i]) > -1){
				ball++;
			}
		}
		result.textContent = strike + '스트라이크' + ball + '볼 입니다.';
		input.value = '';
		input.focus();
	}
});