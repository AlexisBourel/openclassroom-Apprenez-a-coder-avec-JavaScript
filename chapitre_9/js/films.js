//En vous inspirant du cours, écrivez un programme films.js qui gère un tableau de films. 
//Chaque film est caractérisé par son titre, son année de sortie et son réalisateur.
//Le programme ajoute trois films de votre choix dans le tableau, 
//puis l'affiche élément par élément comme indiqué ci-dessous.

//le tableau va contenir des objets "Film"
var Film = {
	//chaque film a un titre
	titre: "",
	//une année de sortie :
	annee: 0,
	// et un réalisateur
	realisateur: "",
	//on aura besoin d'un constructeur 
	init : function(titre, annee, realisateur) {
		this.titre = titre;
		this.annee = annee;
		this.realisateur = realisateur;
	},
	// et une fonction de description
	decrire : function(){
		var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
		return description;
	}
};
//creons trois films
var film1 = Object.create(Film);
film1.init("Le Loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");
//ajoutons trois films dans un tableau:
// on initialise le tableau a vide
var films = [];
//ajoutons y les films
films.push(film1);
films.push(film2);
films.push(film3);
//decrivons les maitenant a l'aide de la méthode decrire
console.log("avec une boucle for");
for (var i = 0; i < films.length; i++){
	console.log(films[i].decrire());
};
films[0].decrire();
console.log("avec une boucle forEach");
films.forEach(function (film) {
    console.log(film.decrire());
});
