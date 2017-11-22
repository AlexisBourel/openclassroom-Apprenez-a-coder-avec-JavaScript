/* Génération du nombre aléatoire entre min inclus et max non-inclus,
 * Math.floor() arrondi à l'inférieur et 
 * Math.random() génère un nombre entre 0 inclus et 1 non-inclus.
 */
function randInt(min, max)
{
    return Math.floor((max - min) * Math.random()) + min;
}

/* Vérification de l'entrée utilisateur,
 * Renvoie true si l'entrée est un nombre compris entre min et max inclus,
 * Renvoie false dans tous les autres cas.
 */
function correctAnswer(userEntry, min, max)
{
    var numEntry;
    
    // utilise une expression régulière qui n'accepte que les nombres entiers de 0 à 999
    if (/^\d{1,3}$/.test(userEntry))
	numEntry = Number(userEntry);
    else
	return false;
    
    // vérifie si le nombre est entre min et max
    if (numEntry >= min && numEntry <= max)
	return true;
    else
	return false;
}

//##########################################################
//##################  __ MAIN __  ##########################
//##########################################################
/* Fonction principale de la devinette,
 * le script commence à s'exécuter ici.
 */
// Remplacer ces deux variables pour changer la plage du nombre mystère sans toucher le reste du code
var mysteryMin = 1;
var mysteryMax = 100;
// --------------------------------------------------------------------------------------------------

var mysteryNumber = randInt(mysteryMin, (mysteryMax + 1));
var numberFound = false;
var gameOverText;

console.log("### NOMBRE MYSTERE ###\n");
// Pendant 6 tours de jeu
for (var round = 1; round <= 6; round++)
{
    console.log("\n---------- Tour " + round + " / 6 ----------");
    var userAnswer = prompt("Trouvez le nombre mystère entre 1 et 100\n" +
	"(vous avez " + (7 - round) + " essai(s))");
    
    // Tant que l'utilisateur ne donne pas une réponse valide
    while (!correctAnswer(userAnswer, mysteryMin, mysteryMax))
    {
	userAnswer = prompt("Je n'ai pas compris, veuillez taper un nombre entre 1 et 100");
    }
    var answeredNumber = Number(userAnswer);
    
    // Si le nombre à trouver est plus petit
    if (answeredNumber > mysteryNumber)
    {
        console.log(answeredNumber + " est trop grand");
    }
    // Si le nombre à trouver est plus grand
    else if (answeredNumber < mysteryNumber)
    {
        console.log(answeredNumber + " est trop petit");
    }
    // Si c'est le bon nombre
    else
    {
        console.log("Trouvé !");
	gameOverText = "Gagné !!!" + "\nVous avez trouvé le nombre mystère " +
            mysteryNumber + " en " + round + " tour(s) !\n";
        numberFound = true;
        break;
    }
}

// Si le dernier tour est passé sans trouver le bon nombre
if (numberFound === false)
{
    gameOverText = "Perdu !!!\nVous n'avez pas trouvé le nombre mystère dans la limite impartie !\n" +
          "Le nombre à trouver était " + mysteryNumber + ".\n";
}

// Messages de fin de partie
console.log(gameOverText);
alert(gameOverText);
console.log("\n(actualiser la page ou cliquer sur Rejouer pour lancer une nouvelle partie)");
