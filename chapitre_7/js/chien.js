// TODO : ajoutez ici la définition de l'objet chien
var chien = {
// -------- PROPERTIES --------	
	nom : "Crockdur",
	race : "matin de Naples",
	taille : 75,
	 
// -------- FUNCTION ----------
	aboyer : function(){
		var cri = "Grrr ! Grrr !";
		return cri;
	}
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());