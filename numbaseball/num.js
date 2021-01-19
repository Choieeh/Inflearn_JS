var body = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];

var 숫자배열 = [];

for (var i = 0; i<4; i++){
	var temp = 숫자후보.shift();
	숫자배열.push(temp);
}

var result = document.createElement('h1');
document.body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);


form.addEventListener('submit', function callback() {
	
})