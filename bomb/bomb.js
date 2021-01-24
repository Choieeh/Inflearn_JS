document.querySelector('#exec').addEventListener('click', function(){
	var hor = parseInt(document.querySelector('#hor').value);
	var ver = parseInt(document.querySelector('#ver').value);
	var mine = parseInt(document.querySelector('#mine').value);
	console.log(hor, ver, mine);
	
	var data = new Array;
	
	var tbody = document.querySelector('#table tbody');
	for (var i = 0; i < ver; i++){
		var tr = document.createElement('tr');
		var arr= [];
		data.push(arr);
		for (var j = 0; j < hor; j++){
			var td = document.createElement('td');
			tr.appendChild(td);
			td.textContent = "1"
		}
		tbody.appendChild(tr);
	}
})