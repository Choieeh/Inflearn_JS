var body = document.body;
var table = document.createElement('table');
var count = 1;

var board = new Array(9);
board.fill(0);
var turn = 1;
console.log(board);

function if_win(){
	for(var i =0; i<3;i++){
		for(var j=0; j<3; j++){
			
		}
	}
}

var btn_click = function (){
	console.log(this.id);
	if(board[this.id] === 0){
		if(turn === 1){
			board[this.id] = 'X';
			turn = 2;
		}
		else if (turn ===2){
			board[this.id] = 'O';
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

