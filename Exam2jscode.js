
function Message() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	if(name.trim().length == 0){
	alert("You didn't put in a name!");
	}else if(Number.isInteger(+name)){
		alert("You put in a number!");
	}else if(age.trim().length == 0){
		alert("You didn't put in an age!");
	}else if(age < 1){
		alert("This is not acceptable!");
	}else if(age > 125){
		alert("This is too old!");
	}else{
		alert("Thank you for visiting this page " + name + "!");
		}
}
Message();

function Result() {
	var age = document.getElementById("age").value;
	const color = ["blue", "green", "yellow", "pink", "orange"];
	
	if (age >= 1 && age <= 25) {
	document.body.style.background = ('blue');
	}else if(age >= 26 && age <= 40) {
  document.body.style.background = ('green');
  }else if(age >= 41 && age <= 55) {
  document.body.style.background = ('yellow');
  }else if(age >= 56 && age <= 75) {
  document.body.style.background = ('pink');
  }else if(age >= 76 && age <= 125) {
  document.body.style.background = ('orange');
	}
}
