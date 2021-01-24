var body = document.body;
var table = document.createElement('table');
var result = document.createElement('div');
var board = new Array(10);
var turn=1;
var end;

function if_win(thiss){
	var turnm
	var jul = Math.floor((thiss.id-1) / 3);
	var can = (thiss.id-1) % 3;
	console.log(jul, can)
	if(turn === 1){
		turnm = 'X';
	}else{
		turnm = 'O';
	}
	if(
		board[jul*3 + 1] === turnm &&
		board[jul*3 + 2] === turnm &&
		board[jul*3 + 3] === turnm
	) {
		end = 1;
	}
	if(
		board[can] === turnm &&
		board[can+3] === turnm &&
		board[can+6] === turnm
	){
		end = 1;
	}
	if(jul - can === 0 || Math.abs(jul - can) === 2){
		if(
			board[1] === turnm &&
			board[5] === turnm &&
			board[9] === turnm
		){
			end = 1;
		}
		else if(
			board[3] === turnm &&
			board[5] === turnm &&
			board[7] === turnm
		){
			end = 1;
		}
	}
	if (end === 1){
		result.textContent = "player" + turn + "님이 승리!";
		reset();
		init();
	}
	
}

var btn_click = function (){
	
	result.textContent = '';
	if(board[this.id] === 0){
		if(turn === 1){
			board[this.id] = 'X';
			this.textContent = 'X';
			if_win(this)
			turn = 2;
		}
		else if (turn ===2){
			board[this.id] = 'O';
			this.textContent = 'O';
			if_win(this)
			turn = 1;
		}
	}
	//this.id 하면 클릭한 id가 바로 나오네???
	
	
};

function reset() {
	while(table.hasChildNodes()){
		table.removeChild(table.firstChild);
	}
}

function init() {
	var count = 1;
	
	board.fill(0);
	turn = 1;
	end = 0;
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
	body.append(result);
}
init();