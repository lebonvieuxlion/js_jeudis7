let numberChosen = prompt("Choisi le nombre d'étage de ta pyramide");
let numberOfBlank = numberChosen - 1;
let numberOfHashtag = 1;

while(numberOfBlank >= 0){
	console.log(" ".repeat(numberOfBlank) + "#".repeat(numberOfHashtag))
	numberOfBlank--
	numberOfHashtag++
}

