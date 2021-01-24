var body = document.body;
var table = document.createElement('table');
var count = 1;

var board = new Array(10);
board.fill(0);
var turn = 1;
var end = 0;

function if_win(thiss, turn){
	var turnm
	var jul = thiss.id / 3;
	var can = thiss.id % 3;
	if(turn === 1){
		turnm = 'X';
	}else{
		turnm = 'O';
	}
	if(
		board[jul*3 + 1].textContent === turnm &&
		board[jul*3 + 2].textContent === turnm &&
		board[jul*3 + 3].textContent === turnm
	) {
		end = 1;
	}
	if(
		board[can].textContent === turnm &&
		board[can+3].textContent === turnm &&
		board[can+6].textContent === turnm
	){
		end = 1;
	}
	if(jul - can === 1 || Math.abs(jul - can) === 3){
		if(
			
		)
	}
	
}

var btn_click = function (){
	console.log(this.id);
	if(board[this.id] === 0){
		if(turn === 1){
			board[this.id] = 'X';
			this.textContent = 'X';
			turn = 2;
		}
		else if (turn ===2){
			board[this.id] = 'O';
			this.textContent = 'O';
			turn = 1;
		}
	}
	console.log(board);
	//this.id 하면 클릭한 id가 바로 나오네???
};

for (var i =1; i<4; i++){
	var tr = document.createElement('tr');
	for (var j=1; j<4; j++){
		var td = document.createElement('td');
		td.addEventListener('click', btn_click);
		td.id = count;
		count ++;
		tr.append(td);
	}
	table.append(tr);
}
body.append(table);

