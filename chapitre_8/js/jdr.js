// TODO : ajoutez ici la d�finition de l'objet perso
var perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,
	
	decrire : function() {
		var description = this.nom + " a " + this.sante + " points de vie, " 
		+ this.force + " en force et " + this.xp + " en experience.";
		return description; 
	}
};

console.log(perso.decrire());

// Aurora est bless�e par une fl�che
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle comp�tence
perso.xp = perso.xp + 15;

console.log(perso.decrire());