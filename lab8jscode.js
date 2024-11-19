


function Insect(legs) {
	let inputLegs=document.getElementById("inputLegs").value;
 this.legs = inputLegs;

let aInsect = new Insect("legs");

document.getElementById("showResult").innerHTML= "The number of legs aInsect has " + aInsect.inputLegs;
}

function submit {
	Insect.this("legs");
}



