const todo = document.getElementById("todo");
const todo_list = document.getElementById("todo_list");
const input = document.getElementById("todo_input");
const todo_input = document.getElementById("todo_in");

const TODOS_LS = 'toDos';

var toDos = [];


const delTodo = (event) => {
	const btn = event.target;
	const li = btn.parentNode;
	todo_list.removeChild(li);
	const cleanToDos = toDos.filter((toDo) => {
		return toDo.id !== parseInt(li.id);
	})
	toDos = cleanToDos;
	saveTodo();
}

const saveTodo = () => {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

const paintTodo = (currentValue) => {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.innerText = "X";
	delBtn.addEventListener('click', delTodo);
	const span = document.createElement("span");
	const count = toDos.length + 1;
	span.innerText = currentValue;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = count;
	todo_list.appendChild(li);
	const toDoObj = {
		text: currentValue,
		id: count
	};
	toDos.push(toDoObj);
	saveTodo();
}

const handleTodo = (event) => {
	event.preventDefault();
	const currentValue = todo_input.value;
	paintTodo(currentValue);
	todo_input.value = "";
} 

const loadToDos = () => {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach((toDo)=>{
			paintTodo(toDo.text);
		})
	}
}


const init_todo = () => {
	loadToDos();
	input.addEventListener("submit", handleTodo);
}

init_todo();