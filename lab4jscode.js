function calculateMPG() {
	//Set values for input//
	let inputMiles=document.getElementById("inputMiles").value;
	let inputGallons=document.getElementById("inputGallons").value;

	//Set up the desired Calculation//
	let MPG =(inputMiles/inputGallons);

document.getElementById("calculatedShow").innerHTML= "The calculated result is "+MPG+" Miles Per Gallon."

}







