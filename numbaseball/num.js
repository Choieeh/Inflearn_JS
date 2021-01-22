var body = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var narray = [];

for (var i = 0; i<4; i+=1){
	var temp = 숫자후보.splice(Math.floor(Math.random() * (9-i)), 1)[0];
	narray.push(temp);
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
var narrayj = narray.join('');

form.addEventListener('submit', function callback(event) {
	narray = narrayj.split('');
//왜 숫자배열이 이 함수안에서는 적용이 안되지??????? narrayj라는 변수를 다시 선언해서 split해주는 방식으로 narray 설정\
	//next to do : 10번이상 틀리면 답 + 오류 메시지 출력후 새로운 게임 시작 + 함수 만들어서 선언
	event.preventDefault();
	var 답 = input.value;
	console.log(답)
	console.log(narrayj)
	if (답 === narrayj) {
		result.textContent = '홈런';
		input.value = '';
		input.focus();
		var 숫자후보 = [1,2,3,4,5,6,7,8,9];
		var narray = [];
		for (var i = 0; i<4; i++){
			var temp = 숫자후보.splice(Math.floor(Math.random() * (9-i)), 1)[0];;
			narray.push(temp);
		}
	} else {
		var 답배열 = 답.split('');
		var strike = 0;
		var ball = 0;
		for (var i =0; i < 3; i++){
			if(답배열[i] === narray[i]){
				strike++;
			} else if (narray.indexOf(답배열[i]) > -1){
				ball++;
			}
		}
		result.textContent = strike + '스트라이크' + ball + '볼 입니다.';
		input.value = '';
		input.focus();
	}
});