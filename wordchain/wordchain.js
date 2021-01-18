var body = document.body;
var word = document.createElement('div');
word.textContent = '이현';
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var result = document.createElement('div');
document.body.append(result);

button.addEventListener('submit', function callback(event){
	event.preventDefault();
	if (word.textContent[word.textContent.length - 1] === input.value[0]){
		result.textContent = '딩동댕';
		word.textContent = input.value;
		input.value = '';
		input.focus();
	} else {
		result.textContent = '땡';
		input.value = '';
		input.focus();
	}
})