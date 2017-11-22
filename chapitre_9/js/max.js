var valeurs = [11, 3, 7, 2, 9, 10];
//Le programme calcule et affiche ensuite la plus grande valeur présente dans le tableau.
// definissons le nombre maximum 
var max = valeurs[0];
//on vérifie pour chaque valeur du tableau si elle est plus grande que max, si oui max deviens ce nombre ect...
for (var i=0; i < valeurs.length; i++) {
	if (valeurs[i] > max) {
		max = valeurs[i];
	}
}
//affichons le resultat
console.log("le plus grand nombre par le tableau de valeurs est : " + max );