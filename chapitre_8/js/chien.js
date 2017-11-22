// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
	nom:"",
	race:"",
	taille:0,
	
	
	init : function(nom, race, taille){
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	
	aboyer : function(){
		var aboiement = "Ouaf ! Ouaf !"
		if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
		} else {
			aboiement = "Grrr ! Grrr !";
	}return aboiement;
},

	decrire : function(){}

};    
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());