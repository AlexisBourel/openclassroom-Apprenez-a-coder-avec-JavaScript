/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
// definissons la reponse de l'utilisateur
var reponse;
// ajoutons une fonction pour redefinir la réponse de l'utilisateur
function donnerReponse(){
	reponse = Number(prompt("Choisissez un nombre svp."));
}
//definissons aussi un compteur de mauvaises reponses
var nombreMauvaisesReponses = 0;
donnerReponse();

//ajoutons une boucle jusqu'a ce que le joueur trouve la solution ou fait 6 erreurs
while (reponse !== solution && nombreMauvaisesReponses !== 6) {
	if (reponse < solution){
	console.log(reponse + " est trop petit");
	donnerReponse();
	nombreMauvaisesReponses++;
	} else {
	console.log(reponse + " est trop grand");
	donnerReponse();
	nombreMauvaisesReponses++;
	}
}

//ecrivons desormais le resultat 
if (reponse === solution) {
console.log("Bravo la solution était " + reponse);
console.log("Vous avez réussi en " + (nombreMauvaisesReponses + 1) + " essai(s)");
} else {
console.log("Perdu, la solution était : " + solution);
}

	
	