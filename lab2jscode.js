function save() {
	let item1 = document.getElementById("item1").value;
	let item2 = document.getElementById("item2").value;
	let item3 = document.getElementById("item3").value;
	let item4 = document.getElementById("item4").value;
	let item5 = document.getElementById("item5").value;
	
	localStorage.setItem('item1',item1);
	localStorage.setItem('item2',item2);
	localStorage.setItem('item3',item3);
	localStorage.setItem('item4',item4);
	localStorage.setItem('item5',item5);
	}
	   
function erase() {
	localStorage.clear();
	}