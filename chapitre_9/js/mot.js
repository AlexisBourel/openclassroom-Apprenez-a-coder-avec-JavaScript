console.log("Ecrivez un programmemots.js qui fait saisir à l'utilisateur des mots jusqu'à ce qu'il saisisse stop. Le programme affiche alors la liste des mots saisis.");

//Ecrivez un programmemots.js qui fait saisir à l'utilisateur des mots 
//jusqu'à ce qu'il saisisse "stop". Le programme affiche alors la liste des mots saisis.

var mot = "start";
var mots = [];
while (mot !== "stop") {
	mot = prompt("saisissez un mot svp");
	if(mot !== "stop") {
		mots.push(mot);	
	}
};
console.log("voici la liste de tous les mots que vous avez entré avant le mot stop : ");
for (var i = 0; i < mots.length; i++) {
	console.log(mots[i]);
};
