var arrMiles = new Array();
var arrGals = new Array();
i = 0;
let TMiles = 0, TGals = 0, TMPG = 0;

arrMiles[i] = prompt("Enter miles driven",);
arrGals[i] = prompt("Enter gallons used",);
while((arrMiles[i] > 0) && (arrGals[i] > 0)){
	i++;	
	arrMiles[i] = prompt("Enter miles driven",);
	arrGals[i] = prompt("Enter gallons used",);
}

for (i=0;i<arrMiles.length-1;i++){
 document.write("Miles ["+i+"] = "+arrMiles[i]);
 document.write("<br />");
 document.write("Gals ["+i+"] = "+arrGals[i]);
 document.write("<br />");
 MPG = arrMiles[i]/ arrGals[i];
 document.write("MPG ["+i+"] = "+ MPG);
 document.write("<br />");
 document.write("<br />");
 document.write("<br />");
}

for (let i=0; i < arrMiles.length; i++)
	TMiles += parseInt(arrMiles[i]);
document.write("Total of Miles: " + TMiles);
 document.write("<br />");
for (let i=0; i < arrGals.length; i++)
	TGals += parseInt(arrGals[i]);
document.write("Total of Gallons: " + TGals);
 document.write("<br />");
for (let i=0; i < MPG.length; i++)
	TMPG += MPG[i];
document.write("Total of MPG: " + TMPG);