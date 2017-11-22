//Utilisez cet objet dans un programmechenil.js
//qui ajoute trois chiens dans un tableau, 
//puis affiche des informations sur le chenil 
//et chacun de ses chiens.

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
	//description des informations des chiens
	decrire : function () {
		var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer();
		return description;
	}
};

// ajoutons trois chiens dans notre cheni
// 1 creons les
var chien1 = Object.create(Chien);
chien1.init("Crokdur", "matin de Naples", 75);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
var chien3 = Object.create(Chien);
chien3.init("Medor", "labrador", 58);

// 2 creons un tableau de chiens
var chiens = [];
// ajoutons y nos chiens
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);
//decrivons notre chenil
console.log("Le chenil heberge " + chiens.length + " chien(s) : ");
for (var i = 0; i < chiens.length; i++) {
	console.log(chiens[i].decrire());
};


