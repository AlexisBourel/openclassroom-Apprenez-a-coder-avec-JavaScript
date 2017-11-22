/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO


console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100

var solution = Math.floor(Math.random() * 100) + 1;

var coup = 0;

//for (coup = 0; solution != nbuser;coup++)

	do
{

var nbuser = parseInt(prompt('Quel est le chiffre à deviner ?'));
    
	if(nbuser > solution) {
	console.log(nbuser + ' est trop grand.');

	coup++;
	
}  else if (nbuser < solution) {
	   console.log(nbuser + ' est trop petit.');
    
    coup++;
    
}  else if (nbuser == solution) {
	   console.log("Bravo ! La solution est bien : " + solution + "\nTu as trouvé en " + coup  + " coups");
}

}

while (coup < 6)
console.log("Perdu ! La solution était : " + solution);
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

