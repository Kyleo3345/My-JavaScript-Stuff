function showColors() {
var colorcodes = ["00", "33", "66", "99", "cc", "ff"];

	for (var a = 0; a < colorcodes.length; a++) {
		for (var b = 0; b < colorcodes.length; b++) {
			for (var c = 0; c < colorcodes.length; c++) {
				var pair1 = colorcodes[a];
				var pair2 = colorcodes[b];
				var pair3 = colorcodes[c];
				var fullhex = pair1 + pair2 + pair3;
     		document.getElementById("showcolors").innerHTML += '<p style="color: #"'+ fullhex +">#" + fullhex + "</p>";
			}
		}
	}
}
showColors();