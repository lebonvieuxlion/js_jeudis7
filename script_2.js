

let number = prompt("Salut rentre ton nombre à factoriser")
calculation = number

while(number > 1) {
	calculation = calculation * (number - 1);
	number --;
}

console.log( `Le résultat est ${calculation}`)

