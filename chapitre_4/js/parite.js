﻿var nombre = Number(prompt("Saisissez un nombre svp"));

for (var i = nombre; i < nombre+10; i++) {

    if (i % 2 === 0) {

        console.log(i + " est pair");

    } else {
	
		console.log(i + " est impair");
		
	}	

}