// ******************FUNCTIONS***********************
function compterVoyelles (mot) {
	var nombreVoyelles = 0;
	motLow = mot.toLowerCase();
	for (var i = 0; i < motLow.length; i++) {
		//pour chaque lettre on verifie si c'est une voyelle, si c'est le cas, on ajoute 1 au compteur, sinon rien
		if (motLow[i] === "a" || motLow[i] === "e" || motLow[i] === "i" || motLow[i] === "o" || motLow[i] === "u" || motLow[i] === "y") {
		nombreVoyelles++;	
		}
	}
	return nombreVoyelles
}

function inverser(mot) {
	var motInverse = "";
	//remplissons le motInverse 
	for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
	return motInverse;
}

function palindrome(mot){
	//mettons le mot en low case pour faciliter les comparaison
	var motLow = mot.toLowerCase();
	//inversons le mot
	var motInverse = inverser(motLow);
	//si le mot et le mot inverse sont egaux, alors le mot est palindrome
	if (motInverse === motLow) {
		return "Ce mot est un palindrome";
	} else {
		return "Ce mot n'est pas un palindrome";
	}
}

function convertirEnLeetSpeak(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

// Renvoie l'équivalent "leet speak" d'une lettre
function trouverLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
        // ...
    }
    return lettreLeet;
}


	
// on commence par faire saisir un mot par l'utilisateur	
var mot = prompt("Choisissez un mot");
// on décrit le mot grace aux function declarees plus haut
console.log("Le mot : " + mot + " contient " + mot.length + " lettres.");
console.log("il s'écrit en minuscules : " + mot.toLowerCase());
console.log("il s'écrit en majuscules : " + mot.toUpperCase());
console.log("il contient " + compterVoyelles(mot) + " voyelle(s) et " + (mot.length - compterVoyelles(mot)) + " consonne(s)");
console.log("à l'envers, il s'écrit : " + inverser(mot));
console.log(palindrome(mot));
console.log("en LeetSpeak, cela donnerait : " + convertirEnLeetSpeak(mot));